# pip install xlsxwriter

import os
import xml.sax
import xlsxwriter

class ArticleHandler(xml.sax.ContentHandler):
    def __init__(self):
        self.current_path = []
        self.add_to_article = False
        self.section_type = ""
        self.article_summary = ""
        self.article_text = ""

    def clear(self):
        self.__init__()

    def startElement(self, name, attrs):
        self.current_path.append(name)
        
        if len(self.current_path) < 2: return
        self.add_to_article = False

        if name == 'section':
            self.section_type = attrs['type']

        if self.current_path[-2] == 'body':
            if self.current_path[-1] in ['supertitle','title', 'intitle']:
                self.add_to_article = True
        if self.current_path[-2] == 'section':
            if self.current_path[-1] in ['paragraph']:
                self.add_to_article = True
        if len(self.current_path) < 3: return
        if self.current_path[-3] == 'section':
            if self.current_path[-2] in ['paragraph']:
                self.add_to_article = True
        

    def endElement(self, name):
        self.current_path.pop()

    def characters(self, content):
        if self.add_to_article:
            if self.section_type == 'INL':
                self.article_summary = self.article_summary + content
            else:
                if self.section_type not in ['AUT']:
                    self.article_text = self.article_text + content


def folderwalk(path: str, extfilter = ""):
    for subdir, dirs, files in os.walk(path):
        for filename in files:
            filepath = subdir + os.sep + filename
            if filepath.endswith(extfilter):
                yield (filepath)


if __name__ == "__main__":
    content = []

    parser = xml.sax.make_parser()
    parser.setFeature(xml.sax.handler.feature_namespaces, 0)
    handler = ArticleHandler()
    parser.setContentHandler(handler)
    
    folder = r'/mnt/del20/2_XML_Files'
    for f in folderwalk(folder,extfilter='.xml'):
            handler.clear()
            parser.parse(f)
            filename = str.split(f,'/')[-1]
            content.append((filename,handler.article_summary,handler.article_text))

    # Create a workbook and add a worksheet.
    workbook = xlsxwriter.Workbook('/mnt/del20/articlexmltotext.xlsx')
    worksheet = workbook.add_worksheet()

    # Start from the first cell. Rows and columns are zero indexed.
    row = 1
    col = 0

    worksheet.write(0, col,     'xml')
    worksheet.write(0, col + 1, 'intro')
    worksheet.write(0, col + 2, 'text')
    # Iterate over the data and write it out row by row.
    for xmlname, summary, fulltext in (content):
        worksheet.write(row, col,     xmlname)
        worksheet.write(row, col + 1, summary)
        worksheet.write(row, col + 2, fulltext)
        row += 1

    workbook.close()
    
