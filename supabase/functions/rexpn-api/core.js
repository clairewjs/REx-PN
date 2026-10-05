const BANK={
  "sources": {
    "consent": [
      "BCCNM: Consent",
      "https://www.bccnm.ca/LPN/PracticeStandards/Pages/consent.aspx"
    ],
    "doc": [
      "BCCNM: Documentation",
      "https://www.bccnm.ca/LPN/PracticeStandards/Pages/documentation.aspx"
    ],
    "deleg": [
      "BCCNM: Delegation",
      "https://www.bccnm.ca/LPN/PracticeStandards/Pages/Delegation.aspx"
    ],
    "med": [
      "BCCNM: Medication",
      "https://www.bccnm.ca/LPN/PracticeStandards/Pages/medication.aspx"
    ],
    "privacy": [
      "BCCNM: Privacy",
      "https://www.bccnm.ca/LPN/PracticeStandards/Pages/privacyconfidentiality.aspx"
    ],
    "culture": [
      "BCCNM: Cultural safety",
      "https://www.bccnm.ca/LPN/PracticeStandards/Pages/CulturalSafetyHumility.aspx"
    ],
    "boundary": [
      "BCCNM: Boundaries",
      "https://www.bccnm.ca/LPN/PracticeStandards/Pages/boundaries.aspx"
    ],
    "infection": [
      "CDC: Standard precautions",
      "https://www.cdc.gov/infection-control/hcp/basics/standard-precautions.html"
    ],
    "hands": [
      "CDC: Hand hygiene",
      "https://www.cdc.gov/clean-hands/hcp/clinical-safety/"
    ],
    "stroke": [
      "Heart & Stroke: Stroke signs",
      "https://www.heartandstroke.ca/stroke/signs-of-stroke"
    ],
    "sugar": [
      "MedlinePlus: Low blood sugar",
      "https://medlineplus.gov/ency/patientinstructions/000085.htm"
    ],
    "pressure": [
      "MedlinePlus: Pressure injury prevention",
      "https://medlineplus.gov/ency/patientinstructions/000147.htm"
    ],
    "swallow": [
      "MedlinePlus: Swallowing problems",
      "https://medlineplus.gov/ency/patientinstructions/000065.htm"
    ],
    "oxygen": [
      "MedlinePlus: Oxygen safety",
      "https://medlineplus.gov/ency/patientinstructions/000049.htm"
    ],
    "crisis": [
      "Government of Canada: Crisis support",
      "https://www.canada.ca/en/public-health/services/mental-health-services/mental-health-get-help.html"
    ],
    "exam": [
      "NCSBN: REx-PN test plan",
      "https://rexpn.com/test-plan.page"
    ]
  },
  "sets": [
    {
      "title": "Safety & infection prevention",
      "category": "Safety and infection control",
      "questions": [
        {
          "id": "p1-1",
          "stem": "After removing gloves, what should the nurse do before touching clean supplies? ",
          "options": [
            "Perform hand hygiene",
            "Put on another pair of gloves immediately",
            "Wipe hands on the uniform",
            "Continue because gloves protected the hands"
          ],
          "answer": [
            0
          ],
          "rationale": "Gloves do not replace hand hygiene. Changing gloves, wiping a uniform, or skipping cleaning can transfer organisms.",
          "category": "Safety and infection control",
          "source": "hands",
          "type": "single"
        },
        {
          "id": "p1-2",
          "stem": "Which client requires standard precautions? ",
          "options": [
            "Only clients with fever",
            "Only clients in isolation",
            "Only clients with a confirmed infection",
            "Every client receiving care"
          ],
          "answer": [
            3
          ],
          "rationale": "Apply standard precautions universally; a known infection is not required. The other answers exclude clients who may carry unrecognized infection.",
          "category": "Safety and infection control",
          "source": "infection",
          "type": "single"
        },
        {
          "id": "p1-3",
          "stem": "A nurse expects blood to splash during care. Which protection is appropriate? Select all that apply. ",
          "options": [
            "Protective gown as indicated by exposure",
            "Ordinary eyeglasses as the only eye protection",
            "Gloves",
            "Protection for eyes and face"
          ],
          "answer": [
            2,
            3,
            0
          ],
          "rationale": "Choose barriers for the anticipated exposure. Ordinary glasses do not provide the same splash coverage as appropriate eye protection.",
          "category": "Safety and infection control",
          "source": "infection",
          "type": "multi"
        },
        {
          "id": "p1-4",
          "stem": "A client's hands are visibly soiled. Which cleaning method is best? ",
          "options": [
            "Wearing gloves without cleaning",
            "Soap and water",
            "Alcohol hand rub alone",
            "A dry paper towel"
          ],
          "answer": [
            1
          ],
          "rationale": "Visible soil calls for washing with soap and water. Rub alone, dry wiping, or gloves do not adequately remove the soil.",
          "category": "Safety and infection control",
          "source": "hands",
          "type": "single"
        },
        {
          "id": "p1-5",
          "stem": "Which action is unsafe after giving an injection? ",
          "options": [
            "Recapping a used needle with both hands",
            "Discarding it in a sharps container",
            "Using the device's safety mechanism",
            "Following the sharps-disposal procedure"
          ],
          "answer": [
            0
          ],
          "rationale": "Two-handed recapping creates a needlestick risk. Safety devices and proper sharps disposal reduce that risk.",
          "category": "Safety and infection control",
          "source": "infection",
          "type": "single"
        },
        {
          "id": "p1-6",
          "stem": "A visitor lights a cigarette beside oxygen equipment. What is the priority? ",
          "options": [
            "Increase oxygen flow",
            "Open a window and continue",
            "Move the ashtray closer",
            "Stop smoking and remove the ignition source safely"
          ],
          "answer": [
            3
          ],
          "rationale": "Oxygen supports combustion. Increasing flow, ventilation alone, or moving an ashtray does not resolve the ignition hazard.",
          "category": "Safety and infection control",
          "source": "oxygen",
          "type": "single"
        }
      ]
    },
    {
      "title": "Consent & coordinated care",
      "category": "Management of care",
      "questions": [
        {
          "id": "p2-1",
          "stem": "A capable adult declines a dressing change after receiving information. What should the nurse do? ",
          "options": [
            "Ask a relative to override the decision",
            "Proceed because the treatment is ordered",
            "Record consent even though the client refused",
            "Respect the decision and explore the concern"
          ],
          "answer": [
            3
          ],
          "rationale": "A capable client may refuse. Explore concerns without coercion; a relative, order, or false consent entry cannot override the decision.",
          "category": "Management of care",
          "source": "consent",
          "type": "single"
        },
        {
          "id": "p2-2",
          "stem": "A client signed consent yesterday but now says to stop. What is the best response? ",
          "options": [
            "Hide the form",
            "Ask the family to convince the client immediately",
            "Pause and clarify the client's wishes",
            "Continue because the form was signed"
          ],
          "answer": [
            2
          ],
          "rationale": "Consent can be withdrawn. A previous signature does not justify continuing unwanted care; concealment and pressure undermine voluntary decisions.",
          "category": "Management of care",
          "source": "consent",
          "type": "single"
        },
        {
          "id": "p2-3",
          "stem": "Before delegating a restricted activity, what must the nurse verify? Select all that apply. ",
          "options": [
            "The nurse can transfer all assessment responsibility",
            "The activity is within the nurse's scope and competence",
            "Employer policy supports delegation",
            "The UCP has demonstrated the required competence"
          ],
          "answer": [
            1,
            2,
            3
          ],
          "rationale": "Safe delegation requires authority, competence, and policy support. Overall nursing assessment remains the nurse's responsibility.",
          "category": "Management of care",
          "source": "deleg",
          "type": "multi"
        },
        {
          "id": "p2-4",
          "stem": "A client deteriorates after an activity was delegated. What is the nurse's responsibility? ",
          "options": [
            "Reassess the client and reconsider the delegation",
            "Leave the original plan unchanged",
            "Transfer all responsibility to the UCP",
            "Assume the prior nurse's decision is permanent"
          ],
          "answer": [
            0
          ],
          "rationale": "Delegation decisions must respond to the client's current status. Prior decisions do not remove the need for reassessment and accountability.",
          "category": "Management of care",
          "source": "deleg",
          "type": "single"
        },
        {
          "id": "p2-5",
          "stem": "Which chart entry is most appropriate? ",
          "options": [
            "Client is difficult and uncooperative",
            "Client always causes problems",
            "Client refused because they dislike nurses",
            "Client declined dressing change; states pain is a concern"
          ],
          "answer": [
            3
          ],
          "rationale": "The factual entry identifies the action and reported concern. Labels, generalizations, and an invented motive are not objective documentation.",
          "category": "Management of care",
          "source": "doc",
          "type": "single"
        },
        {
          "id": "p2-6",
          "stem": "The nurse forgot to chart a morning intervention. How should it be recorded? ",
          "options": [
            "Chart tomorrow without an event time",
            "Ask a colleague to sign it as their own care",
            "A clearly marked late entry with event and entry times",
            "Backdate the entry as if written earlier"
          ],
          "answer": [
            2
          ],
          "rationale": "Late entries distinguish when care occurred from when it was recorded. Backdating, missing times, and misattribution compromise the record.",
          "category": "Management of care",
          "source": "doc",
          "type": "single"
        }
      ]
    },
    {
      "title": "Medication decisions",
      "category": "Pharmacological and parenteral therapies",
      "questions": [
        {
          "id": "p3-1",
          "stem": "A medication order is unclear. What should the nurse do before administering it? ",
          "options": [
            "Ask the client to choose a dose",
            "Use the dose another client receives",
            "Clarify the order with an authorized prescriber",
            "Guess the intended dose"
          ],
          "answer": [
            2
          ],
          "rationale": "Clarify ambiguity before administration. Guessing, client selection, and copying another prescription cannot establish a valid client-specific dose.",
          "category": "Pharmacological and parenteral therapies",
          "source": "med",
          "type": "single"
        },
        {
          "id": "p3-2",
          "stem": "A client reports a new medication allergy not shown on the record. What is safest? ",
          "options": [
            "Ask the roommate whether the allergy is real",
            "Pause administration and verify and communicate the allergy",
            "Give the dose and watch for a rash",
            "Ignore it because the record is blank"
          ],
          "answer": [
            1
          ],
          "rationale": "New allergy information requires assessment and communication before exposure. A blank record or another person's opinion does not invalidate the report.",
          "category": "Pharmacological and parenteral therapies",
          "source": "med",
          "type": "single"
        },
        {
          "id": "p3-3",
          "stem": "A nurse discovers that a wrong dose was already given. What is the priority? ",
          "options": [
            "Assess the client and obtain appropriate clinical assistance",
            "Finish routine tasks before checking the client",
            "Delete the medication entry",
            "Wait to see whether anyone notices"
          ],
          "answer": [
            0
          ],
          "rationale": "Client assessment and timely escalation come first. Delay and concealment can compound harm; follow reporting and documentation processes afterward.",
          "category": "Pharmacological and parenteral therapies",
          "source": "med",
          "type": "single"
        },
        {
          "id": "p3-4",
          "stem": "A capable client refuses an oral medication. Which action is appropriate? ",
          "options": [
            "Crush it secretly into food",
            "Threaten discharge",
            "Ask another nurse to administer it without explanation",
            "Explore the reason and respect the informed refusal"
          ],
          "answer": [
            3
          ],
          "rationale": "Explore concerns and respect refusal. Covert administration, threats, or bypassing discussion defeat voluntary consent.",
          "category": "Pharmacological and parenteral therapies",
          "source": "consent",
          "type": "single"
        },
        {
          "id": "p3-5",
          "stem": "A client asks what a new medication is for. Which response is best? ",
          "options": [
            "Tell the client to take it without questions",
            "Provide another client's medication leaflet",
            "Explain its purpose in clear language and invite questions",
            "Say the prescription is enough information"
          ],
          "answer": [
            2
          ],
          "rationale": "Medication care includes client-specific information. An order alone, dismissal, and unrelated teaching do not support understanding.",
          "category": "Pharmacological and parenteral therapies",
          "source": "med",
          "type": "single"
        },
        {
          "id": "p3-6",
          "stem": "Which action belongs in evaluating medication care? ",
          "options": [
            "Ignoring new symptoms after administration",
            "Assessing and documenting the client's response",
            "Assuming the desired effect occurred",
            "Recording administration before giving the dose"
          ],
          "answer": [
            1
          ],
          "rationale": "Evaluate actual effects and document findings. Assumptions, advance charting, and ignoring symptoms prevent safe follow-up.",
          "category": "Pharmacological and parenteral therapies",
          "source": "med",
          "type": "single"
        }
      ]
    },
    {
      "title": "Recognizing risk",
      "category": "Reduction of risk potential",
      "questions": [
        {
          "id": "p4-1",
          "stem": "A client develops new facial droop and slurred speech. What is the priority? ",
          "options": [
            "Ask the client to sleep and reassess tomorrow",
            "Activate urgent stroke assessment through the emergency pathway",
            "Wait until the next shift",
            "Offer a snack first"
          ],
          "answer": [
            1
          ],
          "rationale": "New FAST signs warrant emergency action. Waiting, eating, or sleeping can delay time-sensitive stroke assessment.",
          "category": "Reduction of risk potential",
          "source": "stroke",
          "type": "single"
        },
        {
          "id": "p4-2",
          "stem": "During lunch, a client repeatedly coughs when swallowing. Which action is safest? ",
          "options": [
            "Stop feeding and assess swallowing safety",
            "Offer larger bites",
            "Encourage faster eating",
            "Continue while the client lies flat"
          ],
          "answer": [
            0
          ],
          "rationale": "Coughing can signal swallowing difficulty. Larger or faster bites and lying flat increase concern rather than addressing safe intake.",
          "category": "Reduction of risk potential",
          "source": "swallow",
          "type": "single"
        },
        {
          "id": "p4-3",
          "stem": "A client at risk of pressure injury has persistent redness over the sacrum. What is appropriate? ",
          "options": [
            "Massage the reddened area vigorously",
            "Ignore it until the skin breaks",
            "Keep the client in the same position all day",
            "Relieve pressure and assess the skin"
          ],
          "answer": [
            3
          ],
          "rationale": "Pressure relief and skin assessment address early risk. Massage, waiting for breakdown, and prolonged pressure can worsen damage.",
          "category": "Reduction of risk potential",
          "source": "pressure",
          "type": "single"
        },
        {
          "id": "p4-4",
          "stem": "Which finding during eating requires follow-up for swallowing difficulty? ",
          "options": [
            "Requesting a napkin",
            "Taking time to select a meal",
            "A wet or gurgling voice after a swallow",
            "Choosing a favourite food"
          ],
          "answer": [
            2
          ],
          "rationale": "A wet voice after swallowing can indicate difficulty managing food or fluid. Food preference and ordinary meal requests do not have that implication.",
          "category": "Reduction of risk potential",
          "source": "swallow",
          "type": "single"
        },
        {
          "id": "p4-5",
          "stem": "An insulin-treated client is sweaty, shaky, and hungry. Which assessment is most relevant? ",
          "options": [
            "Review yesterday's visitor list",
            "Check blood glucose promptly",
            "Check shoe size",
            "Ask about hair colour"
          ],
          "answer": [
            1
          ],
          "rationale": "These symptoms can accompany low glucose. The other information does not assess the immediate metabolic concern.",
          "category": "Reduction of risk potential",
          "source": "sugar",
          "type": "single"
        },
        {
          "id": "p4-6",
          "stem": "Which factors warrant attention to pressure injury prevention? Select all that apply. ",
          "options": [
            "Limited ability to change position",
            "Moisture from incontinence",
            "Poor nutrition",
            "A favourite television programme"
          ],
          "answer": [
            0,
            1,
            2
          ],
          "rationale": "Immobility, moisture, and poor nutrition increase concern. Television preference alone is not a physiological risk factor.",
          "category": "Reduction of risk potential",
          "source": "pressure",
          "type": "multi"
        }
      ]
    },
    {
      "title": "Responding to deterioration",
      "category": "Physiological adaptation",
      "questions": [
        {
          "id": "p5-1",
          "stem": "An awake adult with diabetes can swallow safely and has low glucose. Under the hypoglycemia protocol, what is appropriate? ",
          "options": [
            "Give fast-acting carbohydrate and reassess glucose as directed",
            "Give extra insulin",
            "Ask the client to exercise",
            "Wait for the next meal without treatment"
          ],
          "answer": [
            0
          ],
          "rationale": "Fast carbohydrate treats low glucose when oral intake is safe. Insulin, exercise, and delay can worsen hypoglycemia.",
          "category": "Physiological adaptation",
          "source": "sugar",
          "type": "single"
        },
        {
          "id": "p5-2",
          "stem": "An unresponsive client is suspected of having severe hypoglycemia. What is safest? ",
          "options": [
            "Pour juice into the mouth",
            "Give oral tablets",
            "Leave the client alone to rest",
            "Activate emergency assistance and follow the severe-hypoglycemia protocol"
          ],
          "answer": [
            3
          ],
          "rationale": "An unresponsive client cannot safely take oral intake. Emergency treatment and airway protection take priority over juice, tablets, or leaving the client.",
          "category": "Physiological adaptation",
          "source": "sugar",
          "type": "single"
        },
        {
          "id": "p5-3",
          "stem": "A client reports sudden arm weakness and speech difficulty that have now resolved. What should the nurse do? ",
          "options": [
            "Suggest returning next month",
            "Offer food and discharge without assessment",
            "Arrange urgent assessment through the emergency pathway",
            "Assume the problem is harmless because it resolved"
          ],
          "answer": [
            2
          ],
          "rationale": "Transient stroke-like symptoms still require urgent assessment. Resolution does not establish safety or justify delaying review.",
          "category": "Physiological adaptation",
          "source": "stroke",
          "type": "single"
        },
        {
          "id": "p5-4",
          "stem": "A stroke-suspected client asks for water before swallowing has been assessed. Which response is safest? ",
          "options": [
            "Ask the client to drink lying flat",
            "Withhold oral intake pending swallowing safety assessment per protocol",
            "Give water through a straw immediately",
            "Offer a large tablet with water"
          ],
          "answer": [
            1
          ],
          "rationale": "Swallowing may be impaired. Immediate water, a tablet, or lying flat can expose the client to aspiration risk.",
          "category": "Physiological adaptation",
          "source": "swallow",
          "type": "single"
        },
        {
          "id": "p5-5",
          "stem": "A client with low glucose improves after initial treatment. What is needed next? ",
          "options": [
            "Recheck glucose according to the protocol",
            "Assume glucose is normal because symptoms improved",
            "Give an unprescribed insulin dose",
            "Stop all monitoring for the day"
          ],
          "answer": [
            0
          ],
          "rationale": "Symptom improvement alone does not verify recovery. Rechecking guides further treatment; extra insulin or stopping monitoring is unsafe.",
          "category": "Physiological adaptation",
          "source": "sugar",
          "type": "single"
        },
        {
          "id": "p5-6",
          "stem": "Which new symptom is a recognized FAST stroke warning sign? ",
          "options": [
            "Longstanding dry skin",
            "An unchanged old scar",
            "A stable appetite",
            "Sudden facial droop"
          ],
          "answer": [
            3
          ],
          "rationale": "Facial asymmetry is a FAST sign. The other stable findings are not FAST warning signs.",
          "category": "Physiological adaptation",
          "source": "stroke",
          "type": "single"
        }
      ]
    },
    {
      "title": "Therapeutic relationships",
      "category": "Psychosocial integrity",
      "questions": [
        {
          "id": "p6-1",
          "stem": "An Indigenous client describes feeling dismissed in past care. Which response is best? ",
          "options": [
            "Say all services treat everyone identically",
            "Change the topic",
            "Explain that the client is being too sensitive",
            "Listen to the experience and ask what would support safer care"
          ],
          "answer": [
            3
          ],
          "rationale": "Listening and seeking the client's priorities supports culturally safe care. Dismissal, topic changes, and blame undermine trust.",
          "category": "Psychosocial integrity",
          "source": "culture",
          "type": "single"
        },
        {
          "id": "p6-2",
          "stem": "A client asks to become the nurse's close personal friend during treatment. What is appropriate? ",
          "options": [
            "Begin social visits unrelated to care",
            "Ask the client to support the nurse's personal problems",
            "Explain professional boundaries and continue therapeutic support",
            "Agree to keep the friendship secret"
          ],
          "answer": [
            2
          ],
          "rationale": "The nurse maintains professional boundaries. Secret friendship, social dependency, and reversal of support can misuse the relationship.",
          "category": "Psychosocial integrity",
          "source": "boundary",
          "type": "single"
        },
        {
          "id": "p6-3",
          "stem": "A distressed client asks for privacy to discuss a concern. What is appropriate? ",
          "options": [
            "Invite unrelated visitors to listen",
            "Use a private setting and explain relevant confidentiality limits",
            "Discuss the issue in a busy corridor",
            "Promise secrecy under every circumstance"
          ],
          "answer": [
            1
          ],
          "rationale": "Privacy supports a therapeutic discussion; confidentiality has legal and safety limits. Public discussion and unrelated listeners expose personal information.",
          "category": "Psychosocial integrity",
          "source": "privacy",
          "type": "single"
        },
        {
          "id": "p6-4",
          "stem": "A client asks for support from an Elder. What should the nurse do? ",
          "options": [
            "Explore and facilitate the requested support where possible",
            "Reject it because only staff can help",
            "Assume every Indigenous client wants the same Elder",
            "Replace the request with the nurse's own religious preference"
          ],
          "answer": [
            0
          ],
          "rationale": "Person-led care can include chosen cultural supports. Rejection, stereotyping, and imposing personal beliefs disregard the individual's goals.",
          "category": "Psychosocial integrity",
          "source": "culture",
          "type": "single"
        },
        {
          "id": "p6-5",
          "stem": "A client gives the nurse an expensive personal gift. What is appropriate? ",
          "options": [
            "Accept it secretly",
            "Ask for a larger gift",
            "Provide preferential care in exchange",
            "Return or redirect the gift according to professional guidance"
          ],
          "answer": [
            3
          ],
          "rationale": "Significant gifts create boundary concerns. Secrecy, solicitation, and preferential care introduce inappropriate personal benefit.",
          "category": "Psychosocial integrity",
          "source": "boundary",
          "type": "single"
        },
        {
          "id": "p6-6",
          "stem": "A client says they are in immediate danger of harming themselves. What is the priority? ",
          "options": [
            "Promise not to tell anyone",
            "Leave the client to manage alone",
            "Obtain emergency help and maintain immediate safety",
            "Suggest waiting until next week"
          ],
          "answer": [
            2
          ],
          "rationale": "Immediate danger requires urgent assistance. Delaying help, absolute secrecy, or isolation does not address safety.",
          "category": "Psychosocial integrity",
          "source": "crisis",
          "type": "single"
        }
      ]
    },
    {
      "title": "Teaching & prevention",
      "category": "Health promotion and maintenance",
      "questions": [
        {
          "id": "p7-1",
          "stem": "A client cannot explain a proposed intervention after hearing technical language. What should the nurse do? ",
          "options": [
            "Repeat the same jargon louder",
            "Proceed because information was technically provided",
            "Explain again using clear language and check understanding",
            "Treat the silence as consent"
          ],
          "answer": [
            2
          ],
          "rationale": "Clear, accessible information supports informed decisions. Silence, louder jargon, or mere delivery of information does not establish understanding.",
          "category": "Health promotion and maintenance",
          "source": "consent",
          "type": "single"
        },
        {
          "id": "p7-2",
          "stem": "A client using home oxygen asks about smoking. Which teaching is appropriate? ",
          "options": [
            "Increasing oxygen flow makes smoking safer",
            "Keep smoking and ignition sources away from oxygen",
            "Smoking is safe if a window is open",
            "Smoking is safe if oxygen tubing is long"
          ],
          "answer": [
            1
          ],
          "rationale": "Ignition prevention is essential around oxygen. Windows, tubing length, and higher flow do not remove the fire hazard.",
          "category": "Health promotion and maintenance",
          "source": "oxygen",
          "type": "single"
        },
        {
          "id": "p7-3",
          "stem": "Which instruction helps prevent pressure injury at home? ",
          "options": [
            "Change position as advised in an individualized plan",
            "Wait for an open wound before seeking help",
            "Rub persistently red areas forcefully",
            "Stay in one position to avoid wrinkles"
          ],
          "answer": [
            0
          ],
          "rationale": "Regular pressure relief helps prevention. Waiting for breakdown, rubbing red skin, and prolonged immobility do not protect tissue.",
          "category": "Health promotion and maintenance",
          "source": "pressure",
          "type": "single"
        },
        {
          "id": "p7-4",
          "stem": "A client is learning to recognize hypoglycemia. Which symptom should be included? ",
          "options": [
            "A stable old scar",
            "An unchanged birthmark",
            "Gradual hair growth",
            "Shakiness and sweating"
          ],
          "answer": [
            3
          ],
          "rationale": "Shakiness and sweating are possible low-glucose symptoms. The other findings do not identify an acute low-glucose episode.",
          "category": "Health promotion and maintenance",
          "source": "sugar",
          "type": "single"
        },
        {
          "id": "p7-5",
          "stem": "A capable client wants another opinion before deciding on care. What should the nurse do? ",
          "options": [
            "Say a second opinion cancels all care",
            "Pressure the client to sign immediately",
            "Support the request and facilitate access where possible",
            "Label the request as noncompliance"
          ],
          "answer": [
            2
          ],
          "rationale": "Seeking more information is consistent with informed choice. Labels, unfounded threats, and pressure interfere with voluntary decisions.",
          "category": "Health promotion and maintenance",
          "source": "consent",
          "type": "single"
        },
        {
          "id": "p7-6",
          "stem": "An Indigenous client identifies a wellness goal different from the nurse's initial goal. What is best? ",
          "options": [
            "Exclude the client's chosen supports automatically",
            "Collaborate to develop a plan around the client's goals",
            "Insist the nurse's goals always come first",
            "Assume the client lacks motivation"
          ],
          "answer": [
            1
          ],
          "rationale": "Collaborative person-led planning respects the client's priorities. Imposition, assumptions, and automatic exclusion hinder participation.",
          "category": "Health promotion and maintenance",
          "source": "culture",
          "type": "single"
        }
      ]
    },
    {
      "title": "Daily care & comfort",
      "category": "Basic care and comfort",
      "questions": [
        {
          "id": "p8-1",
          "stem": "A client needs help repositioning and cannot move independently. What should the nurse do? ",
          "options": [
            "Massage pressure areas instead of repositioning",
            "Use the planned pressure-relief schedule and appropriate assistance",
            "Leave the client until pain occurs",
            "Drag the client over the sheet"
          ],
          "answer": [
            1
          ],
          "rationale": "Planned repositioning and appropriate assistance reduce sustained pressure. Waiting, dragging, and substituting massage do not achieve safe pressure relief.",
          "category": "Basic care and comfort",
          "source": "pressure",
          "type": "single"
        },
        {
          "id": "p8-2",
          "stem": "Which mealtime position is generally safer for a client with a swallowing plan? ",
          "options": [
            "Upright as specified in the plan",
            "Flat on the back",
            "Head lower than the body",
            "Any position if food is soft"
          ],
          "answer": [
            0
          ],
          "rationale": "An upright position supports safer swallowing; texture alone does not make lying flat or head-down feeding safe. Follow individualized recommendations.",
          "category": "Basic care and comfort",
          "source": "swallow",
          "type": "single"
        },
        {
          "id": "p8-3",
          "stem": "A swallowing plan specifies modified food texture. What is appropriate? ",
          "options": [
            "Offer any texture the nurse prefers",
            "Replace the plan without assessment",
            "Offer large pieces to save time",
            "Provide the prescribed texture and follow the plan"
          ],
          "answer": [
            3
          ],
          "rationale": "The individualized texture plan addresses swallowing needs. Personal preference, unsupervised replacement, and large pieces can undermine safety.",
          "category": "Basic care and comfort",
          "source": "swallow",
          "type": "single"
        },
        {
          "id": "p8-4",
          "stem": "A client has incontinence and limited mobility. Which care supports skin protection? ",
          "options": [
            "Scrub fragile skin harshly",
            "Ignore the skin unless bleeding occurs",
            "Keep skin clean and manage moisture with the care plan",
            "Leave wet linen in place"
          ],
          "answer": [
            2
          ],
          "rationale": "Moisture management and gentle skin care support prevention. Wet linen, harsh friction, and waiting for injury increase risk.",
          "category": "Basic care and comfort",
          "source": "pressure",
          "type": "single"
        },
        {
          "id": "p8-5",
          "stem": "During personal care, a capable client asks the nurse to pause. What is appropriate? ",
          "options": [
            "Tell the client the request is inconvenient",
            "Pause and clarify comfort and consent",
            "Continue because care has started",
            "Restrain the client to finish faster"
          ],
          "answer": [
            1
          ],
          "rationale": "Consent and comfort remain relevant during care. Continuing against a request, restraint for convenience, and dismissal disregard the client.",
          "category": "Basic care and comfort",
          "source": "consent",
          "type": "single"
        },
        {
          "id": "p8-6",
          "stem": "A client requests a chosen family member during care. Which action is best? ",
          "options": [
            "Explore the client's preference and facilitate support with consent and privacy",
            "Exclude all support automatically",
            "Invite everyone without asking",
            "Allow the family member to override a capable client's choices"
          ],
          "answer": [
            0
          ],
          "rationale": "Chosen support can improve the care experience while respecting consent. Automatic exclusion, unwanted visitors, and overriding decisions do not support person-led care.",
          "category": "Basic care and comfort",
          "source": "culture",
          "type": "single"
        }
      ]
    },
    {
      "title": "Calculations & dose checks",
      "category": "Pharmacological and parenteral therapies",
      "questions": [
        {
          "id": "p9-1",
          "stem": "A valid order is 500 mg. Tablets contain 250 mg each. How many tablets provide the dose? ",
          "options": [
            "2 tablets",
            "0.5 tablet",
            "1 tablet",
            "4 tablets"
          ],
          "answer": [
            0
          ],
          "rationale": "500 mg \u00f7 250 mg per tablet = 2 tablets. The alternatives deliver 125 mg, 250 mg, and 1000 mg respectively.",
          "category": "Pharmacological and parenteral therapies",
          "source": "med",
          "type": "single"
        },
        {
          "id": "p9-2",
          "stem": "A valid order is 10 mg. The supplied liquid is 5 mg per mL. What volume is required? ",
          "options": [
            "0.5 mL",
            "5 mL",
            "10 mL",
            "2 mL"
          ],
          "answer": [
            3
          ],
          "rationale": "10 mg \u00f7 5 mg/mL = 2 mL. The alternatives contain 2.5 mg, 25 mg, and 50 mg respectively.",
          "category": "Pharmacological and parenteral therapies",
          "source": "med",
          "type": "single"
        },
        {
          "id": "p9-3",
          "stem": "A simulation order specifies 1000 mL over 8 hours. What pump rate is required? ",
          "options": [
            "250 mL/hour",
            "1000 mL/hour",
            "125 mL/hour",
            "80 mL/hour"
          ],
          "answer": [
            2
          ],
          "rationale": "1000 mL \u00f7 8 hours = 125 mL/hour. The alternatives deliver 640 mL, 2000 mL, and 8000 mL over 8 hours. Verify authorization and clinical appropriateness before real administration.",
          "category": "Pharmacological and parenteral therapies",
          "source": "med",
          "type": "single"
        },
        {
          "id": "p9-4",
          "stem": "A simulation requires 750 mL over 6 hours. What rate gives that volume? ",
          "options": [
            "450 mL/hour",
            "125 mL/hour",
            "75 mL/hour",
            "150 mL/hour"
          ],
          "answer": [
            1
          ],
          "rationale": "750 mL \u00f7 6 hours = 125 mL/hour. Over 6 hours the alternatives give 450 mL, 900 mL, and 2700 mL.",
          "category": "Pharmacological and parenteral therapies",
          "source": "med",
          "type": "single"
        },
        {
          "id": "p9-5",
          "stem": "The order is 0.5 g. The label uses mg. What is the equivalent dose? ",
          "options": [
            "500 mg",
            "5 mg",
            "50 mg",
            "5000 mg"
          ],
          "answer": [
            0
          ],
          "rationale": "1 g = 1000 mg, so 0.5 \u00d7 1000 = 500 mg. The alternatives differ by factors of 100, 10, and 10 respectively.",
          "category": "Pharmacological and parenteral therapies",
          "source": "med",
          "type": "single"
        },
        {
          "id": "p9-6",
          "stem": "A simulation order is 250 mg. The liquid contains 125 mg in 5 mL. What volume is needed? ",
          "options": [
            "2.5 mL",
            "5 mL",
            "20 mL",
            "10 mL"
          ],
          "answer": [
            3
          ],
          "rationale": "250 \u00f7 125 \u00d7 5 = 10 mL. The alternatives contain 62.5 mg, 125 mg, and 500 mg. These are arithmetic exercises, not medication orders.",
          "category": "Pharmacological and parenteral therapies",
          "source": "med",
          "type": "single"
        }
      ]
    },
    {
      "title": "Mixed judgment & accountability",
      "category": "Management of care",
      "questions": [
        {
          "id": "p10-1",
          "stem": "A nurse opens a neighbour's record out of curiosity. Which action is appropriate instead? ",
          "options": [
            "Read it if no one is watching",
            "Share it only with close friends",
            "Open it because the nurse knows the neighbour",
            "Access records only for an authorized care-related purpose"
          ],
          "answer": [
            3
          ],
          "rationale": "Personal familiarity does not authorize access. Secrecy and limited sharing do not make curiosity-based access appropriate.",
          "category": "Management of care",
          "source": "privacy",
          "type": "single"
        },
        {
          "id": "p10-2",
          "stem": "A nurse notices an error in a clinical entry. What is appropriate? ",
          "options": [
            "Ask someone else to claim authorship",
            "Ignore it because the shift ended",
            "Correct it using the approved method while preserving the original information",
            "Erase the original permanently"
          ],
          "answer": [
            2
          ],
          "rationale": "Corrections must preserve the record and follow policy. Erasure, false authorship, and inaction compromise accuracy.",
          "category": "Management of care",
          "source": "doc",
          "type": "single"
        },
        {
          "id": "p10-3",
          "stem": "A client says a colleague used a racist remark. Which response is appropriate? ",
          "options": [
            "Assume the colleague's intent cancels the impact",
            "Support the client and address and report the concern through appropriate channels",
            "Dismiss the concern as a joke",
            "Ask the client to remain silent"
          ],
          "answer": [
            1
          ],
          "rationale": "Culturally safe practice includes addressing racism. Dismissal, silence, and assumptions about intent do not respond to the reported harm.",
          "category": "Management of care",
          "source": "culture",
          "type": "single"
        },
        {
          "id": "p10-4",
          "stem": "Which responsibilities remain with the nurse when delegating a restricted activity? Select all that apply. ",
          "options": [
            "Overall client assessment",
            "Care planning",
            "Evaluation of care",
            "Transferring all professional accountability to the UCP"
          ],
          "answer": [
            0,
            1,
            2
          ],
          "rationale": "Delegation does not transfer overall nursing assessment, planning, or evaluation. The nurse remains accountable for the delegation decision.",
          "category": "Management of care",
          "source": "deleg",
          "type": "multi"
        },
        {
          "id": "p10-5",
          "stem": "A care record was drafted with employer-approved AI. What must the nurse do? ",
          "options": [
            "Assume the software guarantees accuracy",
            "Let the software accept accountability",
            "Skip review if the wording sounds professional",
            "Review and validate its accuracy before finalizing the entry"
          ],
          "answer": [
            3
          ],
          "rationale": "The nurse remains accountable and must validate AI-assisted entries. Fluent wording and software use do not establish factual accuracy.",
          "category": "Management of care",
          "source": "doc",
          "type": "single"
        },
        {
          "id": "p10-6",
          "stem": "Which statement about this practice score is accurate? ",
          "options": [
            "The practice uses the official adaptive item bank",
            "A low practice score proves the student cannot become a nurse",
            "It describes performance on these items and does not predict official REx-PN success",
            "A 70% score guarantees licensure"
          ],
          "answer": [
            2
          ],
          "rationale": "This is a fixed educational exercise. A percentage cannot establish official adaptive-exam ability, guarantee licensure, or determine professional potential.",
          "category": "Management of care",
          "source": "exam",
          "type": "single"
        }
      ]
    }
  ]
};
const ASSETS={};
// Standalone Cloudflare Worker. Instructor credentials are Cloudflare secrets.
const COOKIE='__Host-claire-pn';
const encoder=new TextEncoder();
class HttpError extends Error{constructor(status,message){super(message);this.status=status}}
const fail=(status,message)=>{throw new HttpError(status,message)};
const uid=()=>crypto.randomUUID();
const hex=b=>[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('');
const random=n=>hex(crypto.getRandomValues(new Uint8Array(n)));
const digest=async s=>hex(await crypto.subtle.digest('SHA-256',encoder.encode(s)));
async function passwordHash(password,salt){const key=await crypto.subtle.importKey('raw',encoder.encode(password),'PBKDF2',false,['deriveBits']);return hex(await crypto.subtle.deriveBits({name:'PBKDF2',salt:encoder.encode(salt),iterations:100000,hash:'SHA-256'},key,256))}
function safeEqual(a,b){if(a.length!==b.length)return false;let x=0;for(let i=0;i<a.length;i++)x|=a.charCodeAt(i)^b.charCodeAt(i);return x===0}
function json(data,status=200,extra={}){return new Response(JSON.stringify(data),{status,headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'private, no-store',...securityHeaders,...extra}})}
const securityHeaders={'X-Content-Type-Options':'nosniff','Referrer-Policy':'same-origin','Content-Security-Policy':"default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'",'Permissions-Policy':'camera=(), microphone=(), geolocation=()'};
const db=env=>{if(!env.DB)fail(503,'The class record is temporarily unavailable. Please try again.');return env.DB};
const stmt=(env,sql,...args)=>db(env).prepare(sql).bind(...args);
const get=(env,sql,...args)=>stmt(env,sql,...args).first();
const all=async(env,sql,...args)=>(await stmt(env,sql,...args).all()).results||[];
async function body(request){if(Number(request.headers.get('Content-Length')||0)>65536)fail(413,'Request is too large');const text=await request.text();if(text.length>65536)fail(413,'Request is too large');try{return JSON.parse(text)}catch{fail(400,'Invalid request')}}
function sameOrigin(request){if(request.headers.get('Origin')!==new URL(request.url).origin)fail(403,'Please submit from this website.');if(request.headers.get('Content-Type')?.split(';')[0]!=='application/json')fail(415,'Use JSON requests.')}
async function identity(request,env){if(env.instructorUser)return env.instructorUser;const value=(request.headers.get('Cookie')||'').split(';').map(x=>x.trim()).find(x=>x.startsWith(COOKIE+'='))?.slice(COOKIE.length+1);if(!value||!/^[a-f0-9]{64}$/.test(value))return null;const tokenHash=await digest(value);const admin=await get(env,'SELECT * FROM instructor_sessions WHERE token_hash=? AND expires_at>?',tokenHash,Date.now());if(admin&&env.INSTRUCTOR_PASSWORD_HASH&&safeEqual(admin.credential_version,env.INSTRUCTOR_PASSWORD_HASH))return {id:'claire',role:'instructor',name:'Claire Song',username:env.INSTRUCTOR_USERNAME||'claire',tokenHash};const s=await get(env,'SELECT s.*, t.token_hash FROM sessions t JOIN students s ON s.id=t.student_id WHERE t.token_hash=? AND t.expires_at>? AND s.active=1',await digest(value),Date.now());return s?{id:s.id,role:'student',name:s.name,username:s.username,mustChange:!!s.must_change,tokenHash:s.token_hash}:null}
function requireUser(user){if(!user)fail(401,'Please sign in.');if(user.role==='student'&&user.mustChange)fail(403,'Set your own password before practising.');return user}
function requireInstructor(user){if(user?.role!=='instructor')fail(403,'Instructor access is required.')}
async function log(env,studentId,actor,event,detail,id=uid()){await stmt(env,'INSERT OR IGNORE INTO activity (id,student_id,actor,event,detail,created_at) VALUES (?,?,?,?,?,?)',id,studentId,actor,event,detail,Date.now()).run()}
function publicUser(user){if(!user)return null;return {id:user.id,role:user.role,name:user.name,username:user.username,mustChange:!!user.mustChange}}
const keyed=id=>BANK.sets.flatMap(s=>s.questions).find(q=>q.id===id);
function questions(attempt,review=false){return JSON.parse(attempt.question_ids).map(id=>{const q=keyed(id);if(!q)fail(500,'A question is unavailable.');if(review)return q;const {answer,rationale,...safe}=q;return safe})}
function result(attempt){return {id:attempt.id,name:attempt.name,set:attempt.set_number,mock:!!attempt.mock,index:attempt.current_index,questions:questions(attempt,attempt.status!=='started'),answers:JSON.parse(attempt.answers),started:attempt.started_at,deadline:attempt.deadline,finished:attempt.finished_at,correct:attempt.correct,total:attempt.total,percent:attempt.percent,met:attempt.correct/attempt.total>=.7,status:attempt.status}}
function matching(a,b){return [...a].sort((x,y)=>x-y).join(',')===[...b].sort((x,y)=>x-y).join(',')}
function score(ids,answers){return ids.reduce((sum,id,i)=>sum+(matching(answers[i]||[],keyed(id).answer)?1:0),0)}
async function finalize(env,a,status='completed'){if(a.status!=='started')return a;const correct=score(JSON.parse(a.question_ids),JSON.parse(a.answers)),now=Date.now();await db(env).batch([stmt(env,"UPDATE attempts SET status=?,finished_at=?,updated_at=?,correct=?,percent=? WHERE id=? AND status='started'",status,now,now,correct,Math.round(correct/a.total*100),a.id),stmt(env,"INSERT OR IGNORE INTO activity (id,student_id,actor,event,detail,created_at) SELECT ?,student_id,student_id,status,name || ': ' || correct || '/' || total,finished_at FROM attempts WHERE id=? AND status<>'started'",a.id+':finished',a.id)]);return get(env,'SELECT * FROM attempts WHERE id=?',a.id)}
async function expire(env,a){if(a?.status==='started'&&a.current_index>=a.total)return finalize(env,a);if(a?.status==='started'&&a.deadline&&a.deadline<=Date.now())return finalize(env,a,'timed_out');return a}
async function studentAttempts(env,id){const rows=await all(env,'SELECT * FROM attempts WHERE student_id=? ORDER BY started_at ASC',id);const out=[];for(const a of rows)out.push(result(await expire(env,a)));return out}
function shuffled(ids){const out=[...ids];for(let i=out.length-1;i>0;i--){const buf=crypto.getRandomValues(new Uint32Array(1));const j=buf[0]%(i+1);[out[i],out[j]]=[out[j],out[i]]}return out}
function username(value){if(typeof value!=='string'||!/^[a-z0-9][a-z0-9._-]{2,39}$/.test(value.trim().toLowerCase()))fail(400,'Usernames must be 3–40 characters using letters, numbers, dots, underscores, or hyphens.');return value.trim().toLowerCase()}
function nameValue(value){if(typeof value!=='string'||!value.trim()||value.trim().length>100)fail(400,'Enter a name or class identifier, up to 100 characters.');return value.trim()}
function csvCell(value){let s=String(value??'');if(/^[=+\-@\t\r]/.test(s))s="'"+s;return '"'+s.replace(/"/g,'""')+'"'}
function csv(rows){return '\uFEFF'+rows.map(r=>r.map(csvCell).join(',')).join('\r\n')}
async function handle(request,env){const url=new URL(request.url),path=url.pathname,method=request.method;
 if(!['GET','POST'].includes(method))return json({error:'Method not allowed'},405);
 if(method==='POST')sameOrigin(request);
 if(path==='/api/login'&&method==='POST'){
  const b=await body(request);let un;try{un=username(b.username)}catch{un='invalid'}const password=typeof b.password==='string'&&b.password.length<=128?b.password:'';const ip=request.headers.get('CF-Connecting-IP')||'unknown',rateKey=await digest('login:'+ip),now=Date.now();
  await stmt(env,'INSERT INTO rate_limits (key,count,reset_at) VALUES (?,1,?) ON CONFLICT(key) DO UPDATE SET count=CASE WHEN reset_at<=? THEN 1 ELSE count+1 END,reset_at=CASE WHEN reset_at<=? THEN ? ELSE reset_at END',rateKey,now+900000,now,now,now+900000).run();const rate=await get(env,'SELECT count FROM rate_limits WHERE key=?',rateKey);if(rate.count>200)fail(429,'Too many sign-in attempts. Try again in 15 minutes.');
  const s=await get(env,'SELECT * FROM students WHERE username=?',un);const salt=s?.salt||'unknown-user-fixed-salt';const hash=await passwordHash(password,salt);
  if(!s||!s.active||s.locked_until>now||!safeEqual(hash,s.password_hash)){
   if(s&&s.active&&s.locked_until<=now)await stmt(env,'UPDATE students SET failures=failures+1,locked_until=CASE WHEN failures+1>=5 THEN ? ELSE 0 END WHERE id=?',now+900000,s.id).run();
   fail(401,'Username or password was not accepted. Repeated unsuccessful attempts are temporarily locked.');
  }
  const token=random(32),hashToken=await digest(token);await db(env).batch([stmt(env,'INSERT INTO sessions (token_hash,student_id,expires_at) VALUES (?,?,?)',hashToken,s.id,now+8*3600000),stmt(env,'UPDATE students SET last_login=?,failures=0,locked_until=0 WHERE id=?',now,s.id),stmt(env,'DELETE FROM sessions WHERE expires_at<=?',now),stmt(env,'DELETE FROM rate_limits WHERE reset_at<=?',now)]);
  await log(env,s.id,s.id,'signed_in','Student signed in');return json({user:{id:s.id,role:'student',name:s.name,username:s.username,mustChange:!!s.must_change}},200,{'Set-Cookie':`${COOKIE}=${token}; Path=/; Secure; HttpOnly; SameSite=Strict; Max-Age=28800`});
 }
 const user=await identity(request,env);
 if(path==='/api/me')return json({user:publicUser(user)});
 if(path==='/api/logout'&&method==='POST'){if(user?.tokenHash){await stmt(env,user.role==='instructor'?'DELETE FROM instructor_sessions WHERE token_hash=?':'DELETE FROM sessions WHERE token_hash=?',user.tokenHash).run();await log(env,user.role==='instructor'?null:user.id,user.id,'signed_out','Signed out')}return json({ok:true},200,{'Set-Cookie':`${COOKIE}=; Path=/; Secure; HttpOnly; SameSite=Strict; Max-Age=0`})}
 if(path==='/api/password'&&method==='POST'){
  if(user?.role!=='student')fail(401,'Student sign-in is required');const b=await body(request);if(typeof b.password!=='string'||b.password.length<12||b.password.length>128)fail(400,'Use a password between 12 and 128 characters.');const row=await get(env,'SELECT password_hash,salt FROM students WHERE id=?',user.id);if(safeEqual(await passwordHash(b.password,row.salt),row.password_hash))fail(400,'Choose a new password different from your temporary password.');
  const salt=random(16),hash=await passwordHash(b.password,salt);await db(env).batch([stmt(env,'UPDATE students SET password_hash=?,salt=?,must_change=0,failures=0,locked_until=0 WHERE id=?',hash,salt,user.id),stmt(env,'DELETE FROM sessions WHERE student_id=? AND token_hash<>?',user.id,user.tokenHash)]);await log(env,user.id,user.id,'password_changed','Student changed their password');return json({ok:true});
 }
 if(path.startsWith('/api/admin')){
  requireInstructor(user);
  if(path==='/api/admin/bank')return json(BANK,200,{'Content-Disposition':'attachment; filename="Claire-REx-PN-question-bank.json"'});
  if(path==='/api/admin/overview'){
   // Expired mocks are reconciled when an instructor loads the dashboard.
   for(const a of await all(env,"SELECT * FROM attempts WHERE status='started' AND deadline IS NOT NULL AND deadline<=?",Date.now()))await expire(env,a);
   const students=await all(env,`SELECT s.id,s.username,s.name,s.active,s.must_change,s.created_at,s.last_login,COUNT(CASE WHEN a.status<>'started' THEN 1 END) AS completed,COUNT(CASE WHEN a.status='started' THEN 1 END) AS in_progress,COUNT(DISTINCT CASE WHEN a.status<>'started' AND a.set_number IS NOT NULL THEN a.set_number END) AS sets_done,MAX(CASE WHEN a.mock=1 AND a.status<>'started' THEN a.percent END) AS mock_best FROM students s LEFT JOIN attempts a ON a.student_id=s.id GROUP BY s.id ORDER BY s.created_at DESC`);
   const attempts=await all(env,'SELECT a.id,a.student_id,a.name,a.set_number,a.mock,a.status,a.started_at,a.updated_at,a.finished_at,a.correct,a.total,a.percent,s.name AS student_name,s.username FROM attempts a JOIN students s ON s.id=a.student_id ORDER BY a.started_at DESC LIMIT 500');
   const activity=await all(env,'SELECT l.*,s.name AS student_name,s.username FROM activity l LEFT JOIN students s ON s.id=l.student_id ORDER BY l.created_at DESC LIMIT 200');return json({students,attempts,activity});
  }
  if(path==='/api/admin/students'&&method==='POST'){
   const b=await body(request);if(!Array.isArray(b.students)||b.students.length<1||b.students.length>50)fail(400,'Create between 1 and 50 students at once.');
   const input=b.students.map(s=>({name:nameValue(s.name),username:username(s.username)}));if(new Set(input.map(s=>s.username)).size!==input.length)fail(400,'The list contains duplicate usernames.');for(const s of input)if(await get(env,'SELECT id FROM students WHERE username=?',s.username))fail(409,`Username ${s.username} already exists. No accounts were created.`);
   const rows=[];for(const s of input){const salt=random(16),password='PN-'+random(9);rows.push({...s,id:uid(),salt,password,hash:await passwordHash(password,salt)})}
   const now=Date.now();await db(env).batch(rows.flatMap(s=>[stmt(env,'INSERT INTO students (id,username,name,password_hash,salt,must_change,active,created_at) VALUES (?,?,?,?,?,1,1,?)',s.id,s.username,s.name,s.hash,s.salt,now),stmt(env,'INSERT INTO activity (id,student_id,actor,event,detail,created_at) VALUES (?,?,?,?,?,?)',uid(),s.id,user.id,'account_created','Instructor created student account',now)]));return json({credentials:rows.map(({id,name,username,password})=>({id,name,username,password}))},201);
  }
  const match=path.match(/^\/api\/admin\/students\/([^/]+)\/(reset|access)$/);
  if(match&&method==='POST'){const id=match[1],s=await get(env,'SELECT * FROM students WHERE id=?',id);if(!s)fail(404,'Student not found');
   if(match[2]==='reset'){const salt=random(16),password='PN-'+random(9),hash=await passwordHash(password,salt);await db(env).batch([stmt(env,'UPDATE students SET password_hash=?,salt=?,must_change=1,failures=0,locked_until=0 WHERE id=?',hash,salt,id),stmt(env,'DELETE FROM sessions WHERE student_id=?',id)]);await log(env,id,user.id,'password_reset','Instructor reset password and ended existing sessions');return json({credentials:[{id,name:s.name,username:s.username,password}]})}
   const b=await body(request);if(typeof b.active!=='boolean')fail(400,'Specify whether access is enabled');await db(env).batch([stmt(env,'UPDATE students SET active=? WHERE id=?',b.active?1:0,id),stmt(env,'DELETE FROM sessions WHERE student_id=?',id)]);await log(env,id,user.id,b.active?'access_enabled':'access_disabled','Instructor changed student access');return json({ok:true});
  }
  const detail=path.match(/^\/api\/admin\/attempts\/([^/]+)$/);if(detail){const a=await get(env,'SELECT * FROM attempts WHERE id=?',detail[1]);if(!a)fail(404,'Attempt not found');return json({attempt:result(await expire(env,a))})}
  if(path==='/api/admin/export'){
   const type=url.searchParams.get('type')||'attempts';let rows;
   if(type==='activity'){const list=await all(env,'SELECT l.*,s.name AS student_name,s.username FROM activity l LEFT JOIN students s ON s.id=l.student_id ORDER BY l.created_at ASC');rows=[['Timestamp (UTC)','Student / identifier','Username','Event','Details'],...list.map(l=>[new Date(l.created_at).toISOString(),l.student_name||'Instructor',l.username||'',l.event,l.detail])]}
   else if(type==='students'){const list=await all(env,"SELECT s.name,s.username,s.active,s.created_at,s.last_login,COUNT(DISTINCT CASE WHEN a.status<>'started' AND a.set_number IS NOT NULL THEN a.set_number END) AS sets_done,COUNT(CASE WHEN a.status<>'started' THEN 1 END) AS completed FROM students s LEFT JOIN attempts a ON a.student_id=s.id GROUP BY s.id ORDER BY s.name");rows=[['Student / identifier','Username','Access enabled','Created (UTC)','Last sign-in (UTC)','Sets completed / 10','Completed attempts'],...list.map(s=>[s.name,s.username,s.active?'Yes':'No',new Date(s.created_at).toISOString(),s.last_login?new Date(s.last_login).toISOString():'Never',s.sets_done,s.completed])]}
   else if(type==='attempts'){const list=await all(env,'SELECT a.*,s.name AS student_name,s.username FROM attempts a JOIN students s ON s.id=a.student_id ORDER BY a.started_at ASC');rows=[['Student / identifier','Username','Attempt','Status','Started (UTC)','Last answer saved (UTC)','Finished (UTC)','Correct','Total','Score (%)','Practice target'],...list.map(a=>[a.student_name,a.username,a.name,a.status,new Date(a.started_at).toISOString(),new Date(a.updated_at).toISOString(),a.finished_at?new Date(a.finished_at).toISOString():'',a.correct??'',a.total,a.percent??'',a.correct!==null?(a.correct/a.total>=.7?'Met':'Not met'):''])]}
   else fail(400,'Unknown export');return new Response(csv(rows),{headers:{...securityHeaders,'Content-Type':'text/csv; charset=utf-8','Cache-Control':'private, no-store','Content-Disposition':`attachment; filename="Claire-REx-PN-${type}-${new Date().toISOString().slice(0,10)}.csv"`}});
  }
  fail(404,'Instructor action not found');
 }
 if(path==='/api/bank'){requireUser(user);return json({sources:BANK.sources,sets:BANK.sets.map(s=>({...s,questions:s.questions.map(({answer,rationale,...q})=>q)}))})}
 if(path==='/api/attempts'&&method==='GET'){requireUser(user);if(user.role!=='student')return json({attempts:[]});return json({attempts:await studentAttempts(env,user.id)})}
 if(path==='/api/attempts'&&method==='POST'){
  requireUser(user);if(user.role!=='student')fail(403,'Use a student account to record a practice attempt.');const b=await body(request);const prior=await get(env,"SELECT * FROM attempts WHERE student_id=? AND status='started' ORDER BY started_at DESC LIMIT 1",user.id);if(prior&&(await expire(env,prior)).status==='started')return json({attempt:result(prior),resumed:true});
  let ids,name,setNumber=null,mock=false;if(b.mock===true){ids=shuffled(BANK.sets.flatMap(s=>s.questions.map(q=>q.id)));name='60-question mock';mock=true}else if(Number.isInteger(b.set)&&b.set>=0&&b.set<10){setNumber=b.set;const s=BANK.sets[b.set];ids=s.questions.map(q=>q.id);name=`Set ${b.set+1}: ${s.title}`}else fail(400,'Choose a valid practice set or mock');
  const id=uid(),now=Date.now();await db(env).batch([stmt(env,'INSERT INTO attempts (id,student_id,name,set_number,mock,question_ids,answers,current_index,status,started_at,updated_at,deadline,total) VALUES (?,?,?,?,?,?,?,0,\'started\',?,?,?,?)',id,user.id,name,setNumber,mock?1:0,JSON.stringify(ids),'[]',now,now,mock?now+5400000:null,ids.length),stmt(env,'INSERT INTO activity (id,student_id,actor,event,detail,created_at) VALUES (?,?,?,?,?,?)',id+':started',user.id,user.id,'attempt_started',name,now)]);return json({attempt:result(await get(env,'SELECT * FROM attempts WHERE id=?',id))},201);
 }
 const answerMatch=path.match(/^\/api\/attempts\/([^/]+)\/(answer|status)$/);
 if(answerMatch){requireUser(user);let a=await get(env,'SELECT * FROM attempts WHERE id=? AND student_id=?',answerMatch[1],user.id);if(!a)fail(404,'Attempt not found');a=await expire(env,a);if(answerMatch[2]==='status')return json({attempt:result(a)});if(method!=='POST')fail(405,'Submit an answer with POST');if(a.status!=='started')return json({attempt:result(a)});
  const b=await body(request),ids=JSON.parse(a.question_ids),answers=JSON.parse(a.answers);if(!Number.isInteger(b.index)||b.index<0||b.index>=ids.length)fail(400,'Invalid question index');const q=keyed(ids[b.index]);if(!Array.isArray(b.answer)||!b.answer.length||b.answer.some(i=>!Number.isInteger(i)||i<0||i>=q.options.length)||new Set(b.answer).size!==b.answer.length||(q.type==='single'&&b.answer.length!==1))fail(400,'Choose a valid answer');
  if(b.index<a.current_index){if(matching(b.answer,answers[b.index]||[]))return json({attempt:result(a)});fail(409,'This answer has already been submitted and locked.')}if(b.index!==a.current_index)fail(409,'Refresh your attempt before continuing.');answers[b.index]=b.answer;
  const updated=await stmt(env,"UPDATE attempts SET answers=?,current_index=current_index+1,updated_at=? WHERE id=? AND current_index=? AND status='started'",JSON.stringify(answers),Date.now(),a.id,b.index).run();if(!updated.meta?.changes)fail(409,'The attempt changed. Reload it before continuing.');a=await get(env,'SELECT * FROM attempts WHERE id=?',a.id);if(a.current_index===a.total)a=await finalize(env,a);return json({attempt:result(a)});
 }
 if(path==='/api/tip'&&method==='POST'){requireUser(user);if(user.role!=='student')fail(403,'Student access is required');const b=await body(request);if(!Number.isInteger(b.lesson)||b.lesson<0||b.lesson>9||!Number.isInteger(b.answer)||b.answer<0||b.answer>3)fail(400,'Invalid tip response');const ok=b.answer===0;await log(env,user.id,user.id,'tip_completed',`Lesson ${b.lesson+1}: ${ok?'correct':'review needed'}`);return json({correct:ok})}
 if(path.startsWith('/api/'))fail(404,'Action not found');
 if(path==='/bank.json')fail(403,'Question keys are available only through completed reviews or the instructor account.');
 const asset=ASSETS[path==='/'||path==='/instructor'?'/index.html':path];if(!asset)fail(404,'Page not found');return new Response(asset.body,{headers:{...securityHeaders,'Content-Type':asset.type,'Cache-Control':'no-cache'}});
}
export default {async fetch(request,env){try{return await handle(request,env)}catch(e){if(!(e instanceof HttpError))console.error('Class record request failed',{path:new URL(request.url).pathname,message:e.message});return json({error:e instanceof HttpError?e.message:'The class record could not be loaded or saved. Your current selection is unchanged. Please try again.'},e.status||503)}}};
