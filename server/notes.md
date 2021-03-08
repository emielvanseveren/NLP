# Delaware student game

`Hugginface`, no go cus no dutch models

**Just kidding! https://github.com/iPieter/robbert**

`Spacy` summary works but quality of summary is kinda meh

https://towardsdatascience.com/semantic-similarity-classifier-and-clustering-sentences-based-on-semantic-similarity-a5a564e22304


Recommendation engine?
```json
{
    "iptc": [
        {
            "id": "04000000",
            "label": "economie, business en financiën",
            "selected": "-",
            "manual": "-",
            "score": "0.9683",
            "leaf": false,
            "struc_code": "04000000",
            "struc_label": "economie, business en financiën"
        },
        {
            "id": "20000170",
            "label": "bedrijfsinformatie",
            "selected": "-",
            "manual": "-",
            "score": "0.7276",
            "leaf": true,
            "struc_code": "04000000_20000170",
            "struc_label": "economie, business en financiën_bedrijfsinformatie"
        },
        {
            "id": "20000209",
            "label": "economische sector",
            "selected": "-",
            "manual": "-",
            "score": "0.955",
            "leaf": false,
            "struc_code": "04000000_20000209",
            "struc_label": "economie, business en financiën_economische sector"
        },
        {
            "id": "20000235",
            "label": "bouw en vastgoed",
            "selected": "-",
            "manual": "-",
            "score": "0.7631",
            "leaf": true,
            "struc_code": "04000000_20000209_20000235",
            "struc_label": "economie, business en financiën_economische sector_bouw en vastgoed"
        },
        {
            "id": "06000000",
            "label": "milieu",
            "selected": "-",
            "manual": "-",
            "score": "0.7883",
            "leaf": true,
            "struc_code": "06000000",
            "struc_label": "milieu"
        }
    ],
    "namedEntity": [
        {
            "type": "per",
            "confidence": "MID",
            "salience": "0.071",
            "selected": "-",
            "manual": "-",
            "label": "Benny Debruyne",
            "tag_ids": [
                {
                    "tag_id": "type::entity"
                },
                {
                    "tag_id": "type::person"
                }
            ],
            "q_codes": []
        },
        {
            "type": "per",
            "confidence": "HIGH",
            "salience": "0.143",
            "selected": "-",
            "manual": "-",
            "label": "Sven Mastbooms",
            "tag_ids": [
                {
                    "tag_id": "type::entity"
                },
                {
                    "tag_id": "type::person"
                }
            ],
            "q_codes": []
        },
        {
            "type": "per",
            "confidence": "HIGH",
            "salience": "0.071",
            "selected": "-",
            "manual": "-",
            "label": "Robert De Mûelenaere",
            "tag_ids": [
                {
                    "tag_id": "type::entity"
                },
                {
                    "tag_id": "type::person"
                }
            ],
            "q_codes": []
        },
        {
            "type": "per",
            "confidence": "HIGH",
            "salience": "0.286",
            "selected": true,
            "manual": "-",
            "label": "Dirk Holemans",
            "tag_ids": [
                {
                    "tag_id": "type::entity"
                },
                {
                    "tag_id": "type::person"
                }
            ],
            "q_codes": [
                {
                    "q_code": "Q2786121",
                    "q_score": "HIGH"
                }
            ]
        },
        {
            "type": "per",
            "confidence": "MID",
            "salience": "0.071",
            "selected": "-",
            "manual": "-",
            "label": "Vanier",
            "tag_ids": [
                {
                    "tag_id": "type::entity"
                },
                {
                    "tag_id": "type::person"
                }
            ],
            "q_codes": []
        },
        {
            "type": "loc",
            "confidence": "MID",
            "salience": "0.071",
            "selected": "-",
            "manual": "-",
            "label": "Europa",
            "tag_ids": [
                {
                    "tag_id": "topic::none"
                },
                {
                    "tag_id": "type::entity"
                },
                {
                    "tag_id": "type::gpe"
                },
                {
                    "tag_id": "type::gpe0"
                },
                {
                    "tag_id": "type::location"
                },
                {
                    "tag_id": "type::regio"
                }
            ],
            "q_codes": []
        },
        {
            "type": "loc",
            "confidence": "MID",
            "salience": "0.286",
            "selected": true,
            "manual": "-",
            "label": "Leuven",
            "tag_ids": [
                {
                    "tag_id": "topic::none"
                },
                {
                    "tag_id": "type::entity"
                },
                {
                    "tag_id": "type::gpe"
                },
                {
                    "tag_id": "type::gpe2"
                },
                {
                    "tag_id": "type::location"
                }
            ],
            "q_codes": [
                {
                    "q_code": "Q118958",
                    "q_score": "HIGH"
                }
            ]
        },
        {
            "type": "loc",
            "confidence": "MID",
            "salience": "0.071",
            "selected": "-",
            "manual": "-",
            "label": "Muntstraat",
            "tag_ids": [
                {
                    "tag_id": "topic::none"
                },
                {
                    "tag_id": "type::entity"
                },
                {
                    "tag_id": "type::gpe"
                },
                {
                    "tag_id": "type::location"
                }
            ],
            "q_codes": []
        },
        {
            "type": "loc",
            "confidence": "MID",
            "salience": "0.143",
            "selected": "-",
            "manual": "-",
            "label": "Vlaanderen",
            "tag_ids": [
                {
                    "tag_id": "topic::none"
                },
                {
                    "tag_id": "type::entity"
                },
                {
                    "tag_id": "type::gpe"
                },
                {
                    "tag_id": "type::gpe0"
                },
                {
                    "tag_id": "type::location"
                }
            ],
            "q_codes": [
                {
                    "q_code": "Q234",
                    "q_score": "HIGH"
                }
            ]
        },
        {
            "type": "loc",
            "confidence": "MID",
            "salience": "0.214",
            "selected": "-",
            "manual": "-",
            "label": "Gent",
            "tag_ids": [
                {
                    "tag_id": "topic::none"
                },
                {
                    "tag_id": "type::entity"
                },
                {
                    "tag_id": "type::gpe"
                },
                {
                    "tag_id": "type::gpe2"
                },
                {
                    "tag_id": "type::location"
                }
            ],
            "q_codes": [
                {
                    "q_code": "Q1296",
                    "q_score": "HIGH"
                }
            ]
        },
        {
            "type": "org",
            "confidence": "MID",
            "salience": "0.214",
            "selected": "-",
            "manual": "-",
            "label": "IKEA",
            "tag_ids": [
                {
                    "tag_id": "topic::business"
                },
                {
                    "tag_id": "type::company"
                },
                {
                    "tag_id": "type::entity"
                },
                {
                    "tag_id": "type::organization"
                }
            ],
            "q_codes": [
                {
                    "q_code": "Q54078",
                    "q_score": "HIGH"
                }
            ]
        },
        {
            "type": "org",
            "confidence": "MID",
            "salience": "0.071",
            "selected": "-",
            "manual": "-",
            "label": "Kindred Spirits",
            "tag_ids": [
                {
                    "tag_id": "topic::business"
                },
                {
                    "tag_id": "type::entity"
                },
                {
                    "tag_id": "type::organization"
                }
            ],
            "q_codes": []
        },
        {
            "type": "org",
            "confidence": "HIGH",
            "salience": "0.143",
            "selected": "-",
            "manual": "-",
            "label": "Apple",
            "tag_ids": [
                {
                    "tag_id": "topic::business"
                },
                {
                    "tag_id": "type::company"
                },
                {
                    "tag_id": "type::entity"
                },
                {
                    "tag_id": "type::organization"
                }
            ],
            "q_codes": [
                {
                    "q_code": "Q312",
                    "q_score": "HIGH"
                }
            ]
        },
        {
            "type": "org",
            "confidence": "MID",
            "salience": "0.5",
            "selected": true,
            "manual": "-",
            "label": "Green Deal",
            "tag_ids": [
                {
                    "tag_id": "topic::business"
                },
                {
                    "tag_id": "type::company"
                },
                {
                    "tag_id": "type::entity"
                },
                {
                    "tag_id": "type::organization"
                }
            ],
            "q_codes": [
                {
                    "q_code": "Q2068307",
                    "q_score": "MID"
                }
            ]
        },
        {
            "type": "org",
            "confidence": "HIGH",
            "salience": "0.429",
            "selected": true,
            "manual": "-",
            "label": "Europese Unie",
            "tag_ids": [
                {
                    "tag_id": "type::entity"
                },
                {
                    "tag_id": "type::organization"
                }
            ],
            "q_codes": [
                {
                    "q_code": "Q458",
                    "q_score": "HIGH"
                }
            ]
        },
        {
            "type": "org",
            "confidence": "HIGH",
            "salience": "1.0",
            "selected": true,
            "manual": "-",
            "label": "EU",
            "tag_ids": [
                {
                    "tag_id": "topic::business"
                },
                {
                    "tag_id": "topic::politics"
                },
                {
                    "tag_id": "type::entity"
                },
                {
                    "tag_id": "type::organization"
                }
            ],
            "q_codes": [
                {
                    "q_code": "Q458",
                    "q_score": "HIGH"
                }
            ]
        },
        {
            "type": "org",
            "confidence": "MID",
            "salience": "0.071",
            "selected": "-",
            "manual": "-",
            "label": "De Green Deal",
            "tag_ids": [
                {
                    "tag_id": "topic::business"
                },
                {
                    "tag_id": "type::entity"
                },
                {
                    "tag_id": "type::organization"
                }
            ],
            "q_codes": []
        },
        {
            "type": "org",
            "confidence": "HIGH",
            "salience": "0.071",
            "selected": "-",
            "manual": "-",
            "label": "Confederatie Bouw",
            "tag_ids": [
                {
                    "tag_id": "type::entity"
                },
                {
                    "tag_id": "type::organization"
                }
            ],
            "q_codes": []
        },
        {
            "type": "org",
            "confidence": "MID",
            "salience": "0.071",
            "selected": "-",
            "manual": "-",
            "label": "Oikos",
            "tag_ids": [
                {
                    "tag_id": "topic::business"
                },
                {
                    "tag_id": "type::entity"
                },
                {
                    "tag_id": "type::organization"
                }
            ],
            "q_codes": []
        },
        {
            "type": "org",
            "confidence": "HIGH",
            "salience": "0.071",
            "selected": "-",
            "manual": "-",
            "label": "Europese Commissie",
            "tag_ids": [
                {
                    "tag_id": "type::entity"
                },
                {
                    "tag_id": "type::organization"
                }
            ],
            "q_codes": [
                {
                    "q_code": "Q8880",
                    "q_score": "HIGH"
                }
            ]
        },
        {
            "type": "org",
            "confidence": "MID",
            "salience": "0.071",
            "selected": "-",
            "manual": "-",
            "label": "Leuven 2030",
            "tag_ids": [
                {
                    "tag_id": "type::entity"
                },
                {
                    "tag_id": "type::organization"
                }
            ],
            "q_codes": []
        },
        {
            "type": "org",
            "confidence": "MID",
            "salience": "0.071",
            "selected": "-",
            "manual": "-",
            "label": "Voeding Verbindt",
            "tag_ids": [
                {
                    "tag_id": "type::entity"
                },
                {
                    "tag_id": "type::organization"
                }
            ],
            "q_codes": []
        },
        {
            "type": "org",
            "confidence": "MID",
            "salience": "0.071",
            "selected": "-",
            "manual": "-",
            "label": "Buurderij",
            "tag_ids": [
                {
                    "tag_id": "type::entity"
                },
                {
                    "tag_id": "type::organization"
                }
            ],
            "q_codes": []
        },
        {
            "type": "org",
            "confidence": "MID",
            "salience": "0.071",
            "selected": "-",
            "manual": "-",
            "label": "Europese Industriestrategie",
            "tag_ids": [
                {
                    "tag_id": "type::entity"
                },
                {
                    "tag_id": "type::organization"
                }
            ],
            "q_codes": []
        }
    ],
    "postcode": [],
    "locality_label": [],
    "vat": [],
    "polarity": [],
    "emotion": [],
    "tag": [
        {
            "label": "Dirk Holemans",
            "manual": "-",
            "id": "5198"
        },
        {
            "label": "Leuven",
            "manual": "-",
            "id": "29389"
        },
        {
            "label": "Green Deal",
            "manual": "-",
            "id": "801854"
        },
        {
            "label": "Europese Unie",
            "manual": "-",
            "id": "1407"
        },
        {
            "label": "EU",
            "manual": "-",
            "id": "4510"
        }
    ]
}
```



clustering important !


-----

Extra model: 


done: 
Lengte van zin / aantal woorden
zin met cijfers
average word length
aanhalingstekens (quotes important)
inleiding & slot is belnagrijk
Spacy POS tagging (zelfst naamwoorden / werkwoorden) Namen  -> kijken of hoofdletter
woordfrequentie


todo:
Leestekens -> vraagteken of uitroepteken
woorden die in titel zitten
zin na een vraag

