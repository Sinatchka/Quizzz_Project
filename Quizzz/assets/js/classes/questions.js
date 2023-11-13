class ContentData {

    getQuizData() {
        /**
         * Return the Quiz data array
         * @returns { Array}
         */
        const quizData = [
            /* {
                 "topic": "Programmierung",
                 "questions": [
                     {
                         "type": "checkbox",
                         "question": "Was ist ein Algorithmus?",
                         "options": {
                             "a": "Algorithmus einschließlich erforderlicher Daten in einer dem Computer verständlichen Sprache.",
                             "b": "Vorschrift zur Lösung eines Problems.",
                             "c": "Sprache zur Formulierung von Verarbeitungsvorschriften, die von einem IT-System ausgeführt werden können."
                         },
                         "answer": "b"
                     },
                     {
                         "type": "radio",
                         "question": "Eine Anweisung ist eine selbstständige Einheit zur Verarbeitung von Daten auf einem Computer. Besteht aus einer Vielzahl von Befehlen.",
                         "options": {
                             "a": "Richtig",
                             "b": "Falsch"
                         },
                         "answer": "b"
                     },
                     {
                         "type": "checkbox",
                         "question": "Zu welcher Programmiersprache gehört Pascal? ",
                         "options": {
                             "a": "Maschiensprache.",
                             "b": "Prozedurale Programmiersprachen",
                             "c": "Objektorientierte Programmiersprachen.",
                             "d": "Logisch/prädikativ Programmiersprachen."
                         },
                         "answer": "b"
                     },
                     {
                         "type": "checkbox",
                         "question": "Welche sind Programmierparadigmen?",
                         "options": {
                             "a": "Prozedural",
                             "b": "Aktional",
                             "c": "Funktional",
                             "d": "Personal",
                             "e": "Logisch/Prädikativ",
                             "f": "Generalisiert",
                             "g": "Objektorientiert"
                         },
                         "answer": [
                             "a",
                             "c",
                             "e",
                             "g"
                         ]
                     },
                     {
                         "type": "checkbox",
                         "question": "Welche der folgenden Regeln zur Benennung von Variablen in Python sind richtig?",
                         "options": {
                             "a": "Variablennamen sollten mit $ beginnen.",
                             "b": "Variablennamen sollten nur in Großbuchstaben und durch Leerzeichen getrennt geschrieben werden.",
                             "c": "Variablennamen müssen nicht sinnvoll sein.",
                             "d": "Variablennamen können in Kleinbuchstaben und durch Unterstriche (_) getrennt geschrieben werden.",
                             "e": "Variablennamen sollten sinnvoll sein.",
                             "f": "Variablennamen dürfen keine Schlüsselwörter oder integrierte Funktionsnamen sein."
                         },
                         "answer": [
                             "d",
                             "e",
                             "f"
                         ]
                     },
                     {
                         "type": "checkbox",
                         "question": "Wie schreibt man eine Kommentarzeile in Python?",
                         "options": {
                             "a": "<!--....-->",
                             "b": "//",
                            "c": "/*....* /",
                             "d": "#",
                             "e": " '''....''' ",
                             "f": " ''....'' "
                         },
                         "answer": "d"
                     },
                     {
                         "type": "radio",
                         "question": "Wie gebe ich „Hello World“ in Python aus?",
                         "options": {
                             "a": "echo('Hello World')",
                             "b": "print('Hello World')",
                             "c": "console.log('Hello World')",
                             "d": "print'Hello World'",
                             "e": "system.out.print ('Hello World')"
                         },
                         "answer": "b"
                     },
                     {
                         "type": "radio",
                         "question": "Können JavaScript-Variablen erneut deklariert werden?",
                         "options": {
                             "a": "Ja",
                             "b": "Nein"
                         },
                         "answer": "a"
                     },
                     {
                         "type": "checkbox",
                         "question": "3D in Hexadezimal ist …. in Binär",
                         "options": {
                             "a": "111101",
                             "b": "10110",
                             "c": "01101",
                             "d": "11110"
                         },
                         "answer": "a"
                     },
                     {
                         "type": "checkbox",
                         "question": "Was ist 101101 + 110110 ?",
                         "options": {
                             "a": "1101011",
                             "b": "1100011",
                             "c": "1110011",
                             "d": "1011101"
                         },
                         "answer": "b"
                     },
                     {
                         "type": "checkbox",
                         "question": "Hexadezimal, was ist A000 - 1? ",
                         "options": {
                             "a": "800F",
                             "b": "A00F",
                             "c": "8FFF",
                             "d": "9FFF",
                             "e": "AFFF"
                         },
                         "answer": "d"
                     }
                 ]
              },
             {
                 "topic": "Datenbanken",
                 "questions": [
                     {
                         "type": "radio",
                         "question": "Ein Datenbanksystem (DBS) ist ein System, mit dem sehr große Datenmengen von Computern verwaltet werden können.",
                         "options": {
                             "a": "Richtig",
                             "b": "Falsch"
                         },
                         "answer": "a"
                     },
                     {
                         "type": "checkbox",
                         "question": "Welche Definition passt zur „Kardinalität“ in Datenbanksystemen?",
                         "options": {
                             "a": "Geordnete Sammlung einer großen Datenmenge, Daten stehen in Beziehung zueinander.",
                             "b": "Mehrfachspeicherung von Daten.",
                             "c": "Es besteht kein Widerspruch zwischen den Daten.",
                             "d": "Beschreibt die Art einer Beziehung (1:1, 1:n, m:n",
                             "e": "Redundanzen beseitigen, Dateninkonsistenz verhindern."
                         },
                         "answer": "d"
                     },
                     {
                         "type": "checkbox",
                         "question": "Ein …. ist die theoretische Grundlage („Bauplan“) für ein Datenbanksystem. ",
                         "options": {
                             "a": "Datenbankmodell",
                             "b": "Datenbankmanagement",
                             "c": "IPERKA",
                             "d": "Datenkatalog"
                         },
                         "answer": "a"
                     },
                     {
                         "type": "radio",
                         "question": "Zu Datenbankmodelle gehört das Relationales Datenbankmodell.",
                         "options": {
                             "a": "Richtig",
                             "b": "Falsch"
                         },
                         "answer": "a"
                     }
                 ]
             },
             {
                 "topic": "Projektmanagement",
                 "questions": [
                     {
                         "type": "checkbox",
                         "question": "Kreuze die richtige Projektgrundlagen an: ",
                         "options": {
                             "a": "Ein echtes Projekt ist einfach eine Aufgabe, die man sich setzt und zu bearbeiten versucht.",
                             "b": "Es ist ein strukturiertes Vorgehen zum Erreichen eines Zieles in einem Team --> dem Projektteam. ",
                             "c": "Projekte sind strategisch ausgerichtet und sehr komplex. ",
                             "d": "Ständiger Informationsaustausch und Weitergabe von Teilleistungen im Projekt ist nicht so wichtig."
                         },
                         "answer": "b"
                     },
                     {
                         "type": "radio",
                         "question": "Zu den Arten von Projekten gehört auch „ Non-profit-Projekte.",
                         "options": {
                             "a": "Richtig",
                             "b": "Falsch"
                         },
                         "answer": "a"
                     },
                     {
                         "type": "radio",
                         "question": "Während der Projektdurchführung können alle erreichten Ziele und Probleme dokumentiert werden aber müssen sie nicht.",
                         "options": {
                             "a": "Richtig",
                             "b": "Falsch"
                         },
                         "answer": "b"
                     },
                     {
                         "type": "radio",
                         "question": ".... sind i. d. R. Unternehmen, die sich auf Durchführung von Projekten spezialisiert haben.",
                         "options": {
                             "a": "Auftraggeber",
                             "b": "Auftragnehmer"
                         },
                         "answer": "a"
                     },
                     {
                         "type": "checkbox",
                         "question": "Ein Projekt:",
                         "options": {
                             "a": "Ist immer das gleiche.",
                             "b": "Wird durch Zeit, Geld, Personal, EDV und sozialen Medien unterstützt.",
                             "c": "Erfüllt eine definierte Aufgabe und ein definiertes Ziel.",
                             "d": "Gibt klare Verantwortlichkeiten.",
                             "e": "Ist zeitlich unbegrenzt.",
                             "f": "Es bedarf einer speziellen Organisationsform."
                         },
                         "answer": [
                             "c",
                             "d",
                             "f"
                         ]
                     },
                     {
                         "type": "checkbox",
                         "question": "Für was steht „PSP“ in Projektmanagement?",
                         "options": {
                             "a": "Projektstrukturplan",
                             "b": "Projektstrukturprotokoll",
                             "c": "Protokollstandardpreis ",
                             "d": "Programmsystemplan ",
                             "e": "Protokollstrukturplan",
                             "f": "Es bedarf einer speziellen Organisationsform."
                         },
                         "answer": "a"
                     },
                     {
                         "type": "checkbox",
                         "question": "Welche sind die richtige Darstellungsmöglichkeiten für ein strukturiertes Plan in dem Projektmanagement?",
                         "options": {
                             "a": "Vertikale Darstellung",
                             "b": "Horizontale Darstellung ",
                             "c": "Textdarstellung  ",
                             "d": "Bilddarstellung  ",
                             "e": "Verschlüsselte Darstellung "
                         },
                         "answer": [
                             "a",
                             "b",
                             "c"
                         ]
                     }
                 ]
             },*/
            {
                "topic": "Wirtschaftskunde",
                "questions": [
                    {
                        "type": "checkbox",
                        "question": "Was gehört nicht zum Privatrecht?",
                        "options": {
                            "a": "Handels- und Wirtschaftsrecht",
                            "b": "Staats- und Verfassungsrecht",
                            "c": "Bürgerliches Recht",
                            "d": "Sozialrecht"
                        },
                        "answer": [
                            "Staats- und Verfassungsrecht",
                            "Bürgerliches Recht"
                        ]
                    },
                    {
                        "type": "checkbox",
                        "question": "welche der folgenden gehört zum öffentlichen Recht",
                        "options": {
                            "a": "Verfahrensrecht",
                            "b": "Handelsrecht",
                            "c": "Arbeitsrecht",
                            "d": "Steuerrecht",
                            "e": "Verwaltungsrecht",
                            "f": "Völkerrecht ",
                            "g": "Europarecht"
                        },
                        "answer": [
                            "a",
                            "d",
                            "e",
                            "f",
                            "g"
                        ]
                    },
                    {
                        "type": "checkbox",
                        "question": "Tante Trude schickt ihre 5-jährige Nichte mit einem Zettel zur Post, damit sie für sie 20 Briefmarkten im Wert von 20.00 € kauft, diese Geschäftsfähigkeit (der Vertrag) ist:",
                        "options": {
                            "a": "Gültig",
                            "b": "Schwebend unwirksam",
                            "c": "Nichtig"
                        },
                        "answer": "c"
                    },
                    {
                        "type": "radio",
                        "question": "Ein Azubi kauft einen Computer beim Fachhändler auf Raten. Der Fachhändler liefert unter Eigentumsvorbehalt, jetzt ist der Azubi der Eigentümer des PCs.",
                        "options": {
                            "a": "Richtig ",
                            "b": "Falsch"
                        },
                        "answer": "b"
                    },
                    {
                        "type": "checkbox",
                        "question": "Gattungskauf bedeutet:",
                        "options": {
                            "a": "Der Kaufgegenstand ist eine einmalige Sache, die nicht noch einmal beschafft werden kann.",
                            "b": "Der Kaufgegenstand ist eine Sache, die in mehreren Ausführungen hergestellt und daher beschafft werden kann.",
                            "c": "Es wird zunächst eine kleine Menge bestellt und bei Gefallen der Kauf einer größeren Menge in Aussicht gestellt."
                        },
                        "answer": "b"
                    }
                ]
            }
            /*,
            {

                "topic": "Deutsch",
                "questions": [
                    {
                        "type": "checkbox",
                        "question": "Wie lautet die Mehrzahl von Globus?",
                        "options": {
                            "a": "Globen",
                            "b": "Global",
                            "c": "Globisse",
                            "d": "Globusse"
                        },
                        "answer": [
                            "a",
                            "d"
                        ]
                    },
                    {
                        "type": "checkbox",
                        "question": "„ Während der Sommerferien fährt Familie Müller an die Nordsee.“ \\n In Welchem Fall steht das Nomen Sommerferien in diesem Satz?",
                        "options": {
                            "a": "Akkusativ",
                            "b": "Genitiv",
                            "c": "Dativ",
                            "d": "Nominativ"
                        },
                        "answer": "b"
                    },
                    {
                        "type": "checkbox",
                        "question": "„ Peter ist krank, sodass er zum Arzt muss.“ \\n Um welche Art Nebensatz handelt es sich?",
                        "options": {
                            "a": "Modalsatz",
                            "b": "Konzessivsatz",
                            "c": "Kausalsatz",
                            "d": "Konsekutivsatz"
                        },
                        "answer": "d"
                    },
                    {
                        "type": "checkbox",
                        "question": "Wie lautet der Komparativ von bald?",
                        "options": {
                            "a": "Baldigst ",
                            "b": "Öfter",
                            "c": "Eher",
                            "d": "Demnächst"
                        },
                        "answer": "c"
                    },
                    {
                        "type": "checkbox",
                        "question": " „ Darum ging sie gestern in ein Sportgeschäft.“ \\n Das Wort gestern ist ein…?",
                        "options": {
                            "a": "Nomen ",
                            "b": "Adverb",
                            "c": "Adjektiv",
                            "d": "Pronomen"
                        },
                        "answer": "b"
                    },
                    {
                        "type": "checkbox",
                        "question": "Wie lange dauert ein „Bimester“?",
                        "options": {
                            "a": "Sechs Monate",
                            "b": "Zwölf Monate",
                            "c": "Zwei Monate"
                        },
                        "answer": "c"
                    },
                    {
                        "type": "checkbox",
                        "question": "„ Du fuchsschwänzelst nur.“ \\n Was bedeutet das?",
                        "options": {
                            "a": "Sich selbst bemitleiden",
                            "b": "Jemandem einen Streich spielen",
                            "c": "Anderen schmeicheln"
                        },
                        "answer": "c"
                    },
                    {
                        "type": "checkbox",
                        "question": "Wer oder was ist ein „Ackersmann“?",
                        "options": {
                            "a": "Fabrikarbeiter",
                            "b": "Dörfler",
                            "c": "Bauer"
                        },
                        "answer": "c"
                    },
                    {
                        "type": "checkbox",
                        "question": "„Ihr hattet euch für Grammatik-Genies gehalten, doch dann…“ \\n Welche Zeitform hat diese Einleitung?",
                        "options": {
                            "a": "Perfekt",
                            "b": "Plusquamperfekt",
                            "c": "Präsenz ",
                            "d": "Präteritum "
                        },
                        "answer": "b"
                    },
                    {
                        "type": "checkbox",
                        "question": "Wie nennt man den Prozess in der Wortbildungslehre, wenn ein Wort in eine neue Wortart übertragen wird, z.B., wenn aus einem Substantiv ein Verb wird, wie Fisch --> fischen?",
                        "options": {
                            "a": "Konversion",
                            "b": "Rückbildung",
                            "c": "Konjunktion  ",
                            "d": "Deklination "
                        },
                        "answer": "a"
                    }
                ]
           
            } */
        
        ];
        return quizData;
    }
}
