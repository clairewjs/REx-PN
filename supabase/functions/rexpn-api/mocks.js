import {additionalMocks,additionalSources} from './extra-mocks.js';
// Original draft teaching questions; difficulty labels are editorial, not calibrated.
const originalMockExams=[
  {
    "id": "rex-mock-foundation-v1",
    "title": "Mock 1: Foundation",
    "difficulty": "Foundation",
    "description": "Recognize core safety principles and apply straightforward clinical information.",
    "minutes": 60,
    "version": 1,
    "questions": [
      {
        "id": "rex-2026-foundation-1",
        "type": "single",
        "category": "Management of Care",
        "stem": "A capable adult declines a scheduled wound dressing because it is painful. What should the nurse do first?",
        "options": [
          "Explore the concern and discuss pain relief and options with the client.",
          "Ask the family to authorize the dressing instead.",
          "Complete the dressing because an order exists.",
          "Document refusal without asking about the reason."
        ],
        "answer": [
          0
        ],
        "rationale": "A capable client can decline care. Exploring the concern supports informed choice and may identify a treatable barrier. Family wishes and an order do not replace consent.",
        "source": "mock-standards"
      },
      {
        "id": "rex-2026-foundation-2",
        "type": "single",
        "category": "Management of Care",
        "stem": "The nurse enters a medication order that reads 'take as usual' but no usual dose is documented. What is the safest action?",
        "options": [
          "Use the dose given to the client in the next room.",
          "Select the most common adult dose.",
          "Ask an unregulated care provider to choose the dose.",
          "Clarify the dose before administering the medication."
        ],
        "answer": [
          3
        ],
        "rationale": "The dose must be clear before administration. A common dose or another client's prescription is not an individualized order. Choosing a dose is not a task for an unregulated care provider.",
        "source": "mock-medications"
      },
      {
        "id": "rex-2026-foundation-3",
        "type": "single",
        "category": "Management of Care",
        "stem": "A client asks for an interpreter to discuss treatment. Which arrangement best supports informed communication?",
        "options": [
          "Speak only to the interpreter throughout the discussion.",
          "Ask the client to sign before interpretation is arranged.",
          "Use an appropriate qualified interpreter and address the client directly.",
          "Ask a young child to interpret complex information."
        ],
        "answer": [
          2
        ],
        "rationale": "Interpretation supports understanding and participation. Speaking to the client maintains the therapeutic relationship. A child should not carry responsibility for interpreting complex clinical information.",
        "source": "mock-standards"
      },
      {
        "id": "rex-2026-foundation-4",
        "type": "single",
        "category": "Management of Care",
        "stem": "A client asks to see information in their health record. How should the nurse respond?",
        "options": [
          "Give the client another person's chart as an example.",
          "Explain the organization's process for requesting access.",
          "Refuse because records belong only to staff.",
          "Delete sensitive entries before the request is processed."
        ],
        "answer": [
          1
        ],
        "rationale": "Support the client's access request through the established process while protecting other people's information. Do not alter records to hide information or disclose another client's record.",
        "source": "mock-standards"
      },
      {
        "id": "rex-2026-foundation-5",
        "type": "single",
        "category": "Management of Care",
        "stem": "During handover, which statement communicates the most useful objective information?",
        "options": [
          "The client's temperature increased from 37.1 to 38.6 degrees C at 1400.",
          "The client looks difficult today.",
          "The client always exaggerates symptoms.",
          "The family is probably making the client anxious."
        ],
        "answer": [
          0
        ],
        "rationale": "Specific findings and timing help the receiving nurse assess changes. Labels and unsupported interpretations do not provide reliable clinical information.",
        "source": "mock-standards"
      },
      {
        "id": "rex-2026-foundation-6",
        "type": "single",
        "category": "Management of Care",
        "stem": "The nurse is assigned a procedure they have not been trained to perform. What is the best response?",
        "options": [
          "Perform it independently because it was assigned.",
          "Watch a short video and assume competence.",
          "Ask the client to accept the additional risk without supervision.",
          "Explain the competence limit and obtain appropriate assistance."
        ],
        "answer": [
          3
        ],
        "rationale": "An assignment does not establish individual competence. The nurse must seek appropriate support and maintain safe care rather than rely on consent to excuse unsafe practice.",
        "source": "mock-standards"
      },
      {
        "id": "rex-2026-foundation-7",
        "type": "single",
        "category": "Management of Care",
        "stem": "An unregulated care provider reports a new change in a client's condition. What should the nurse do?",
        "options": [
          "Wait until the next scheduled chart review.",
          "Assume it is normal because the provider knows the client.",
          "Assess the client and determine the needed response.",
          "Ask the provider to diagnose the cause."
        ],
        "answer": [
          2
        ],
        "rationale": "New findings require nursing assessment. Reporting observations is different from diagnosing or deciding the nursing response. Familiarity with a client does not rule out deterioration.",
        "source": "mock-standards"
      },
      {
        "id": "rex-2026-foundation-8",
        "type": "single",
        "category": "Management of Care",
        "stem": "A nurse realizes that a chart entry was made under the wrong client. What is the appropriate response?",
        "options": [
          "Leave the error because the shift has ended.",
          "Correct the record using the authorized audit-preserving process.",
          "Erase the entry so no one can see the error.",
          "Ask a colleague to take responsibility for the entry."
        ],
        "answer": [
          1
        ],
        "rationale": "Corrections must preserve an accurate record and follow the organization's process. Concealing an error or leaving incorrect information can compromise care and accountability.",
        "source": "mock-standards"
      },
      {
        "id": "rex-2026-foundation-9",
        "type": "single",
        "category": "Safety and Infection Control",
        "stem": "The nurse's hands are visibly dirty after assisting with toileting. Which action is appropriate?",
        "options": [
          "Wash with soap and water.",
          "Put on clean gloves without cleaning the hands.",
          "Wipe the hands on a dry towel only.",
          "Use the same gloves for the next client."
        ],
        "answer": [
          0
        ],
        "rationale": "Visible soil requires washing. Gloves are not a substitute for hand hygiene and must not be carried between clients.",
        "source": "mock-hygiene"
      },
      {
        "id": "rex-2026-foundation-10",
        "type": "single",
        "category": "Safety and Infection Control",
        "stem": "A client has a documented latex allergy. Which preparation is most appropriate before a procedure?",
        "options": [
          "Assume all examination gloves are latex-free.",
          "Apply lotion to prevent an allergic reaction.",
          "Ask the client to tolerate brief latex exposure.",
          "Check that the selected supplies are latex-free."
        ],
        "answer": [
          3
        ],
        "rationale": "Allergy precautions include checking the actual product and avoiding the allergen. Brief exposure can still be harmful, and lotion is not an allergy-prevention strategy.",
        "source": "mock-medications"
      },
      {
        "id": "rex-2026-foundation-11",
        "type": "single",
        "category": "Safety and Infection Control",
        "stem": "A mobile client has a new fall risk after receiving a sedating medication. Which intervention best preserves safety and dignity?",
        "options": [
          "Tell the client never to leave the bed again.",
          "Move the call bell away to reduce requests.",
          "Discuss assistance with mobilization and keep the call bell within reach.",
          "Apply restraints automatically for the rest of the day."
        ],
        "answer": [
          2
        ],
        "rationale": "Individualized assistance supports safe mobility. Automatic restraint and inaccessible help create additional risks and do not address the client's needs.",
        "source": "mock-standards"
      },
      {
        "id": "rex-2026-foundation-12",
        "type": "single",
        "category": "Safety and Infection Control",
        "stem": "A used needle is ready for disposal. What is the safest action?",
        "options": [
          "Put it in an ordinary waste bag.",
          "Place it directly into an appropriate sharps container.",
          "Recap it using both hands.",
          "Leave it on the bedside table for later disposal."
        ],
        "answer": [
          1
        ],
        "rationale": "Prompt disposal in the appropriate container reduces exposure risk. Recapping, unattended sharps and ordinary waste disposal expose staff and others to injury.",
        "source": "mock-hygiene"
      },
      {
        "id": "rex-2026-foundation-13",
        "type": "single",
        "category": "Safety and Infection Control",
        "stem": "A client is being identified before medication administration. Which approach is appropriate?",
        "options": [
          "Use the required two identifiers and compare them with the record.",
          "Use the client's room number as the sole identifier.",
          "Accept a roommate's confirmation alone.",
          "Skip identification when the nurse recognizes the client's face."
        ],
        "answer": [
          0
        ],
        "rationale": "Identification must follow the required process. Location and recognition alone do not reliably establish that the medication is being given to the correct person.",
        "source": "mock-medications"
      },
      {
        "id": "rex-2026-foundation-14",
        "type": "single",
        "category": "Health Promotion and Maintenance",
        "stem": "A client is learning a new inhaler technique. Which method best evaluates understanding?",
        "options": [
          "Ask whether the client understood everything.",
          "Provide a longer leaflet without checking performance.",
          "Ask a family member to demonstrate instead of the client.",
          "Ask the client to demonstrate the technique."
        ],
        "answer": [
          3
        ],
        "rationale": "Return demonstration shows how the client will actually use the device. Agreement and written information alone do not verify a practical skill.",
        "source": "mock-plan"
      },
      {
        "id": "rex-2026-foundation-15",
        "type": "single",
        "category": "Health Promotion and Maintenance",
        "stem": "A client wants to change a health habit but feels overwhelmed. Which response supports achievable progress?",
        "options": [
          "Tell the client motivation is all that matters.",
          "Delay any planning until the client has perfect confidence.",
          "Ask the client to choose one realistic first step.",
          "Prescribe several major changes without discussion."
        ],
        "answer": [
          2
        ],
        "rationale": "Collaborative, manageable goals support participation. Overwhelming instructions and dismissing barriers can undermine the client's ability to begin.",
        "source": "mock-plan"
      },
      {
        "id": "rex-2026-foundation-16",
        "type": "single",
        "category": "Health Promotion and Maintenance",
        "stem": "A parent asks how to give an infant medicine accurately. Which instruction is most appropriate?",
        "options": [
          "Mix the full daily dose into a bottle the infant may not finish.",
          "Use a calibrated device marked for the prescribed volume.",
          "Use any kitchen teaspoon.",
          "Estimate the amount from the bottle cap."
        ],
        "answer": [
          1
        ],
        "rationale": "A calibrated device improves measurement accuracy. Kitchen utensils and bottle caps vary, and an unfinished bottle can leave the delivered dose uncertain.",
        "source": "mock-medications"
      },
      {
        "id": "rex-2026-foundation-17",
        "type": "single",
        "category": "Health Promotion and Maintenance",
        "stem": "A client asks about a screening test recommended by their clinician. What should the nurse do?",
        "options": [
          "Explain its purpose and discuss the client's questions and follow-up plan.",
          "Promise that a normal result rules out every disease.",
          "Explain that screening is only useful when symptoms are severe.",
          "Tell the client to cancel because they feel well."
        ],
        "answer": [
          0
        ],
        "rationale": "Screening and diagnostic evaluation are not interchangeable. Teaching should support informed participation without claiming that one result excludes all possible disease.",
        "source": "mock-plan"
      },
      {
        "id": "rex-2026-foundation-18",
        "type": "single",
        "category": "Psychosocial Integrity",
        "stem": "A client says, 'I am frightened about tomorrow's surgery.' Which response is therapeutic?",
        "options": [
          "There is nothing to be frightened about.",
          "Everyone has surgery, so try not to think about it.",
          "Your surgeon is excellent, so you will definitely be fine.",
          "What concerns you most about the surgery?"
        ],
        "answer": [
          3
        ],
        "rationale": "An open question invites the client to identify concerns. Dismissal and guarantees can limit communication and are not supported by the nurse's knowledge.",
        "source": "mock-plan"
      },
      {
        "id": "rex-2026-foundation-19",
        "type": "single",
        "category": "Psychosocial Integrity",
        "stem": "A client experiencing grief begins to cry during a conversation. What is the best response?",
        "options": [
          "Tell the client crying delays recovery.",
          "Explain that others have suffered worse losses.",
          "Remain present and allow the client time to express feelings.",
          "Immediately change the topic."
        ],
        "answer": [
          2
        ],
        "rationale": "Presence and listening support grief expression. Comparing losses, rushing or redirecting the client may communicate that their feelings are unwelcome.",
        "source": "mock-plan"
      },
      {
        "id": "rex-2026-foundation-20",
        "type": "single",
        "category": "Psychosocial Integrity",
        "stem": "A client reports hearing a voice that the nurse cannot hear. Which response is appropriate?",
        "options": [
          "Ignore every report about voices.",
          "I do not hear the voice, but I understand this is distressing for you.",
          "I hear it too, and it is telling the truth.",
          "You are inventing the experience."
        ],
        "answer": [
          1
        ],
        "rationale": "Acknowledge the person's distress without confirming the hallucination. Respectful reality-based communication also creates an opportunity to assess the content and safety implications.",
        "source": "mock-plan"
      },
      {
        "id": "rex-2026-foundation-21",
        "type": "single",
        "category": "Psychosocial Integrity",
        "stem": "A client says they intend to harm themselves after discharge. What is the priority?",
        "options": [
          "Stay with the client and initiate an immediate safety assessment and escalation.",
          "Promise to keep the statement secret.",
          "Arrange discharge before discussing the statement.",
          "Ask the client to manage the risk alone at home."
        ],
        "answer": [
          0
        ],
        "rationale": "A stated intention to self-harm requires immediate protection and assessment. Safety concerns must be communicated appropriately; secrecy or discharge does not resolve the risk.",
        "source": "mock-suicide"
      },
      {
        "id": "rex-2026-foundation-22",
        "type": "single",
        "category": "Psychosocial Integrity",
        "stem": "A client is becoming angry but has not threatened anyone. Which approach is most appropriate?",
        "options": [
          "Move very close and demand compliance.",
          "Challenge the client to prove they are upset.",
          "Respond loudly so the client knows who is in charge.",
          "Use a calm tone, allow personal space and listen to the concern."
        ],
        "answer": [
          3
        ],
        "rationale": "A calm, respectful approach can reduce escalation and help identify unmet needs. Crowding, confrontation and power struggles can worsen distress.",
        "source": "mock-plan"
      },
      {
        "id": "rex-2026-foundation-23",
        "type": "single",
        "category": "Basic Care and Comfort",
        "stem": "A client has difficulty seeing the meal tray. What is the best assistance?",
        "options": [
          "Remove all choices to simplify the meal.",
          "Leave the tray without explaining its location.",
          "Describe the food locations and ask what assistance the client prefers.",
          "Feed the client without asking."
        ],
        "answer": [
          2
        ],
        "rationale": "Ask about preferences and support independence. A visual impairment does not mean the person cannot make choices or participate in eating.",
        "source": "mock-plan"
      },
      {
        "id": "rex-2026-foundation-24",
        "type": "single",
        "category": "Basic Care and Comfort",
        "stem": "An immobile client is at risk of pressure injury. Which plan is most appropriate?",
        "options": [
          "Use a ring cushion as the only prevention measure.",
          "Individualize repositioning and pressure relief and inspect the skin.",
          "Massage persistent red areas over bony prominences.",
          "Keep the client in one position if it is comfortable."
        ],
        "answer": [
          1
        ],
        "rationale": "Prevention combines assessment, pressure relief and an individualized plan. Massage of reddened tissue and prolonged pressure can worsen injury risk.",
        "source": "mock-plan"
      },
      {
        "id": "rex-2026-foundation-25",
        "type": "single",
        "category": "Basic Care and Comfort",
        "stem": "A client with a swallowing assessment recommendation for thickened fluids asks for water. What should the nurse do?",
        "options": [
          "Follow the current swallowing plan and clarify safe options with the team.",
          "Give unrestricted thin water because it is clear.",
          "Use a straw for every client regardless of the plan.",
          "Ask the family to provide unmonitored drinks."
        ],
        "answer": [
          0
        ],
        "rationale": "The individualized swallowing plan guides fluid consistency and assistance. Clear appearance does not make a thin liquid safe for a person with dysphagia.",
        "source": "mock-swallow"
      },
      {
        "id": "rex-2026-foundation-26",
        "type": "single",
        "category": "Basic Care and Comfort",
        "stem": "A client rates pain as 7/10 but is smiling while talking. What is the best response?",
        "options": [
          "Document no pain because the client smiled.",
          "Wait for the client to cry before assessing.",
          "Ask a roommate to verify the pain score.",
          "Assess the pain and treat the report as clinically meaningful."
        ],
        "answer": [
          3
        ],
        "rationale": "Behaviour alone cannot invalidate a capable person's pain report. Further assessment supports a safe, individualized response.",
        "source": "mock-plan"
      },
      {
        "id": "rex-2026-foundation-27",
        "type": "single",
        "category": "Pharmacological and Parenteral Therapies",
        "stem": "An order is for 500 mg. The available tablets are 250 mg each. How many tablets are needed?",
        "options": [
          "3 tablets",
          "4 tablets",
          "2 tablets",
          "1 tablet"
        ],
        "answer": [
          2
        ],
        "rationale": "500 mg divided by 250 mg per tablet equals 2 tablets. Confirm the formulation and order before administration; the calculation does not independently authorize a dose.",
        "source": "mock-medications"
      },
      {
        "id": "rex-2026-foundation-28",
        "type": "single",
        "category": "Pharmacological and Parenteral Therapies",
        "stem": "An order is for 30 mg of a liquid supplied as 10 mg/mL. What volume is needed?",
        "options": [
          "30 mL",
          "3 mL",
          "0.3 mL",
          "10 mL"
        ],
        "answer": [
          1
        ],
        "rationale": "30 mg divided by 10 mg/mL equals 3 mL. Use an appropriate measuring device and verify the prescribed medicine and concentration.",
        "source": "mock-medications"
      },
      {
        "id": "rex-2026-foundation-29",
        "type": "single",
        "category": "Pharmacological and Parenteral Therapies",
        "stem": "A client asks what a newly prescribed medicine is for. What should the nurse do?",
        "options": [
          "Explain its purpose using verified information and check understanding.",
          "Tell the client explanations are only for the prescriber.",
          "Promise that side effects cannot occur.",
          "Give the medicine first and answer questions later."
        ],
        "answer": [
          0
        ],
        "rationale": "Medication teaching supports informed participation. Reliable information and a check of understanding are preferable to dismissing questions or guaranteeing absence of harm.",
        "source": "mock-medications"
      },
      {
        "id": "rex-2026-foundation-30",
        "type": "single",
        "category": "Pharmacological and Parenteral Therapies",
        "stem": "The nurse finds that a medication package is expired. What is the appropriate action?",
        "options": [
          "Use it if the colour looks unchanged.",
          "Double the dose to compensate for possible loss of strength.",
          "Give it and conceal the expiry date.",
          "Obtain an unexpired supply through the approved process."
        ],
        "answer": [
          3
        ],
        "rationale": "Do not substitute visual inspection or altered dosing for product integrity. Use the approved process to obtain an appropriate supply.",
        "source": "mock-medications"
      },
      {
        "id": "rex-2026-foundation-31",
        "type": "single",
        "category": "Pharmacological and Parenteral Therapies",
        "stem": "An awake adult with diabetes can swallow safely and has blood glucose 3.2 mmol/L with shakiness. The hypoglycemia protocol applies. What should the nurse do?",
        "options": [
          "Ask the client to exercise until the shakiness stops.",
          "Wait for the next meal without treating the low glucose.",
          "Give the protocol's fast-acting carbohydrate and recheck glucose as directed.",
          "Give the scheduled rapid-acting insulin first."
        ],
        "answer": [
          2
        ],
        "rationale": "Symptomatic low glucose requires prompt treatment. Fast-acting carbohydrate is appropriate when swallowing is safe, followed by reassessment. Insulin and exercise can worsen hypoglycemia.",
        "source": "mock-swallow"
      },
      {
        "id": "rex-2026-foundation-32",
        "type": "single",
        "category": "Pharmacological and Parenteral Therapies",
        "stem": "A medicine is labelled extended-release. The client cannot swallow the tablet. What is safest?",
        "options": [
          "Hide the whole tablet in food without consent.",
          "Check with the pharmacist for an appropriate alternative before altering it.",
          "Crush it because all tablets can be crushed.",
          "Dissolve it and assume release is unchanged."
        ],
        "answer": [
          1
        ],
        "rationale": "Altering a modified-release product can change drug delivery. Verify an appropriate formulation rather than assuming crushing or dissolving is safe.",
        "source": "mock-swallow"
      },
      {
        "id": "rex-2026-foundation-33",
        "type": "single",
        "category": "Pharmacological and Parenteral Therapies",
        "stem": "A client's allergy list includes a medication that has just been ordered. What should the nurse do before administration?",
        "options": [
          "Clarify the order and allergy information with the appropriate clinician.",
          "Give a small test dose without an order.",
          "Administer it if the client is not currently symptomatic.",
          "Remove the allergy entry without investigation."
        ],
        "answer": [
          0
        ],
        "rationale": "A possible allergy conflict needs clarification. A test dose or absence of current symptoms does not establish safety, and allergy records must not be casually deleted.",
        "source": "mock-medications"
      },
      {
        "id": "rex-2026-foundation-34",
        "type": "single",
        "category": "Reduction of Risk Potential",
        "stem": "A client returns from a procedure with a new monitoring plan. What should the nurse check first?",
        "options": [
          "Assume observations are identical for every procedure.",
          "Wait until the next routine round to look at the plan.",
          "Ask the client to monitor themselves without instruction.",
          "Review the required observations and assess the client's current condition."
        ],
        "answer": [
          3
        ],
        "rationale": "Post-procedure care requires understanding the specific monitoring needs and establishing current findings. Routine timing cannot replace individualized assessment.",
        "source": "mock-plan"
      },
      {
        "id": "rex-2026-foundation-35",
        "type": "single",
        "category": "Reduction of Risk Potential",
        "stem": "A laboratory reports a critical result for an assigned client. What should the nurse do?",
        "options": [
          "Wait for symptoms before reporting it.",
          "Ask another client whether the result sounds serious.",
          "Promptly assess the client and communicate the result through the required escalation process.",
          "File the result for the following shift."
        ],
        "answer": [
          2
        ],
        "rationale": "Critical findings require prompt clinical follow-up. A result can be important before overt symptoms develop.",
        "source": "mock-plan"
      },
      {
        "id": "rex-2026-foundation-36",
        "type": "single",
        "category": "Reduction of Risk Potential",
        "stem": "A client with a new cast reports increasing pain and tingling in the fingers. What is appropriate?",
        "options": [
          "Delay assessment until the scheduled cast removal.",
          "Assess neurovascular status promptly and escalate the change.",
          "Assume all pain under a cast is expected.",
          "Insert an object under the cast to relieve pressure."
        ],
        "answer": [
          1
        ],
        "rationale": "Increasing pain and sensory changes can indicate a complication. They require prompt neurovascular assessment rather than reassurance or unsafe cast manipulation.",
        "source": "mock-cast"
      },
      {
        "id": "rex-2026-foundation-37",
        "type": "single",
        "category": "Reduction of Risk Potential",
        "stem": "A client is starting a diuretic. Which monitoring is relevant to medication safety?",
        "options": [
          "Fluid balance and ordered electrolyte results.",
          "Hair colour changes alone.",
          "The client's preferred television program.",
          "The number of visitors as the only observation."
        ],
        "answer": [
          0
        ],
        "rationale": "Diuretics affect fluid balance and can alter electrolytes. Relevant monitoring helps identify adverse effects rather than focusing on unrelated observations.",
        "source": "mock-potassium"
      },
      {
        "id": "rex-2026-foundation-38",
        "type": "single",
        "category": "Physiological Adaptation",
        "stem": "A client develops sudden facial asymmetry and difficulty speaking. What is the priority?",
        "options": [
          "Offer food to see whether swallowing improves.",
          "Wait one hour to see whether the symptoms resolve.",
          "Document the symptoms only at the end of the shift.",
          "Activate the emergency stroke response and establish when symptoms began."
        ],
        "answer": [
          3
        ],
        "rationale": "Sudden focal neurological changes are time-critical. Emergency assessment and onset information are priorities; oral intake and delay can increase harm.",
        "source": "mock-stroke"
      },
      {
        "id": "rex-2026-foundation-39",
        "type": "single",
        "category": "Physiological Adaptation",
        "stem": "After an opioid dose, a client is difficult to wake and has very slow breathing. What is the priority?",
        "options": [
          "Give another opioid dose to prevent discomfort.",
          "Focus first on completing routine documentation.",
          "Activate emergency help and support breathing; use reversal treatment according to orders or protocol.",
          "Leave the client to sleep undisturbed."
        ],
        "answer": [
          2
        ],
        "rationale": "Opioid-related respiratory depression threatens ventilation. Immediate help and breathing support take priority, with naloxone or other measures according to the applicable protocol.",
        "source": "mock-opioid"
      },
      {
        "id": "rex-2026-foundation-40",
        "type": "single",
        "category": "Physiological Adaptation",
        "stem": "A client with known severe hypoglycemia becomes unconscious. What should the nurse avoid?",
        "options": [
          "Using the prescribed emergency treatment.",
          "Giving food or drink by mouth.",
          "Activating emergency assistance.",
          "Assessing and supporting breathing."
        ],
        "answer": [
          1
        ],
        "rationale": "An unconscious person cannot safely swallow. Emergency assessment and prescribed treatment are needed; oral food or fluids can cause aspiration.",
        "source": "mock-hypo"
      }
    ]
  },
  {
    "id": "rex-mock-applied-v1",
    "title": "Mock 2: Applied Practice",
    "difficulty": "Applied Practice",
    "description": "Apply clinical findings, safe care planning and medication information to the stated situation.",
    "minutes": 60,
    "version": 1,
    "questions": [
      {
        "id": "rex-2026-applied-1",
        "type": "single",
        "category": "Management of Care",
        "stem": "A client who speaks limited English agrees to surgery but says they do not understand why it is needed. What should the nurse do?",
        "options": [
          "Treat a signature as proof of understanding.",
          "Explain that questions are no longer permitted.",
          "Ask another patient to provide consent.",
          "Pause consent-related preparation and arrange appropriate clarification with the prescriber and interpreter."
        ],
        "answer": [
          3
        ],
        "rationale": "A signature alone does not resolve a stated lack of understanding. The nurse advocates for appropriate explanation and interpretation before proceeding with consent-dependent care.",
        "source": "mock-standards"
      },
      {
        "id": "rex-2026-applied-2",
        "type": "single",
        "category": "Management of Care",
        "stem": "An unregulated care provider asks whether to perform a task outside their assigned care plan. What is the nurse's best response?",
        "options": [
          "Let the provider decide based only on confidence.",
          "Assume one previous observation establishes competence.",
          "Assess the request and verify authorization, competence and supervision needs before assigning it.",
          "Approve it because the provider volunteered."
        ],
        "answer": [
          2
        ],
        "rationale": "Assignment decisions require attention to the task, the person, the client and available support. Willingness alone does not establish authorization or competence.",
        "source": "mock-standards"
      },
      {
        "id": "rex-2026-applied-3",
        "type": "single",
        "category": "Management of Care",
        "stem": "A client refuses a prescribed medicine after discussing its purpose and risks. The client has decision-making capacity. What is appropriate?",
        "options": [
          "Record that the medicine was taken to avoid a missed-dose report.",
          "Respect the decision, document relevant information and notify the prescriber as needed.",
          "Hide the medicine in the client's food.",
          "Ask the family to override the client's refusal."
        ],
        "answer": [
          1
        ],
        "rationale": "A capable informed refusal must be respected. Concealment and false documentation undermine consent and safety; communicate the refusal and its implications appropriately.",
        "source": "mock-standards"
      },
      {
        "id": "rex-2026-applied-4",
        "type": "single",
        "category": "Management of Care",
        "stem": "A nurse receives an unclear telephone order. What should the nurse do?",
        "options": [
          "Clarify the order and use the required read-back and documentation process.",
          "Record the closest-sounding medication name.",
          "Ask an unregulated worker to interpret the order.",
          "Administer the medicine and clarify it later."
        ],
        "answer": [
          0
        ],
        "rationale": "Clarification before implementation reduces medication error. The required communication process helps verify that the intended order was correctly heard and recorded.",
        "source": "mock-medications"
      },
      {
        "id": "rex-2026-applied-5",
        "type": "single",
        "category": "Management of Care",
        "stem": "A client wants their condition discussed only with one named support person. A different relative calls. What should the nurse do?",
        "options": [
          "Share the details because all relatives are entitled to them.",
          "Ask the relative to confirm the client's room number and then disclose everything.",
          "Discuss another client's diagnosis instead.",
          "Verify consent and follow the client's information-sharing preferences and privacy requirements."
        ],
        "answer": [
          3
        ],
        "rationale": "Family relationship alone does not establish permission. Verify the client's consent and the caller's identity before disclosing information.",
        "source": "mock-standards"
      },
      {
        "id": "rex-2026-applied-6",
        "type": "single",
        "category": "Management of Care",
        "stem": "During discharge teaching, a client accurately repeats instructions but cannot open the medication container. What is the best response?",
        "options": [
          "Tell the client to skip medicines they cannot access.",
          "Ask the client to use an unlabelled household container without review.",
          "Address the practical barrier and coordinate a usable medication plan.",
          "Record successful teaching and ignore the container problem."
        ],
        "answer": [
          2
        ],
        "rationale": "Understanding is not enough if the plan cannot be carried out. Identify and resolve practical barriers with the appropriate team rather than treating verbal recall as complete readiness.",
        "source": "mock-medications"
      },
      {
        "id": "rex-2026-applied-7",
        "type": "single",
        "category": "Management of Care",
        "stem": "A near miss is caught before medication reaches a client. What should the nurse do?",
        "options": [
          "Report only if someone files a complaint.",
          "Follow the reporting process and examine contributing factors.",
          "Avoid reporting because no harm occurred.",
          "Alter the prescription to make the near miss disappear."
        ],
        "answer": [
          1
        ],
        "rationale": "Near misses can reveal system hazards. Reporting and review support prevention even when the client did not receive the medication.",
        "source": "mock-standards"
      },
      {
        "id": "rex-2026-applied-8",
        "type": "single",
        "category": "Management of Care",
        "stem": "A client says a proposed care plan conflicts with an important cultural practice. What is the best next step?",
        "options": [
          "Ask the client to explain their preference and explore safe adaptations.",
          "Assume the practice is identical for everyone from that culture.",
          "Dismiss the preference because the plan is standard.",
          "Ask a staff member from a similar background to decide for the client."
        ],
        "answer": [
          0
        ],
        "rationale": "Individual preferences must be elicited rather than inferred from group identity. Collaborative planning can preserve both safety and the client's values.",
        "source": "mock-standards"
      },
      {
        "id": "rex-2026-applied-9",
        "type": "single",
        "category": "Safety and Infection Control",
        "stem": "After removing gloves used for personal care, the nurse is about to touch a clean dressing supply. What should the nurse do?",
        "options": [
          "Assume glove removal makes the hands clean.",
          "Handle the supply using the removed gloves.",
          "Clean the hands only after finishing the dressing.",
          "Perform hand hygiene before handling the clean supply."
        ],
        "answer": [
          3
        ],
        "rationale": "Gloves can become contaminated and removal can contaminate hands. Hand hygiene is needed before moving to clean tasks.",
        "source": "mock-hygiene"
      },
      {
        "id": "rex-2026-applied-10",
        "type": "single",
        "category": "Safety and Infection Control",
        "stem": "A client on transmission-based precautions must leave the room for a necessary test. What is appropriate?",
        "options": [
          "Stop precautions whenever the client enters the hallway.",
          "Ask transport staff to infer precautions from the client's appearance.",
          "Coordinate transport using the precautions and communication required for that infection.",
          "Cancel every necessary test indefinitely."
        ],
        "answer": [
          2
        ],
        "rationale": "Safe transport requires the infection-specific plan and communication. Precautions must not be guessed or abandoned merely because the location changes.",
        "source": "mock-hygiene"
      },
      {
        "id": "rex-2026-applied-11",
        "type": "single",
        "category": "Safety and Infection Control",
        "stem": "A nurse notices that a bed alarm is disabled for a client with a recent fall. What is the best response?",
        "options": [
          "Leave the plan unchanged because the client has not fallen today.",
          "Assess the client's current needs and restore the prescribed safety plan while arranging appropriate assistance.",
          "Rely solely on the alarm and stop assessing mobility.",
          "Restrict fluids to reduce toileting requests."
        ],
        "answer": [
          1
        ],
        "rationale": "Equipment is one part of an individualized safety plan. Assessing needs and providing assistance address risk; an alarm alone does not prevent falls.",
        "source": "mock-standards"
      },
      {
        "id": "rex-2026-applied-12",
        "type": "single",
        "category": "Safety and Infection Control",
        "stem": "A colleague is about to reuse a single-use injection syringe for another client after changing the needle. What should the nurse do?",
        "options": [
          "Stop the action and follow the organization's safety reporting process.",
          "Approve it because the needle is new.",
          "Allow reuse if both clients have the same diagnosis.",
          "Save the syringe for reuse the following day."
        ],
        "answer": [
          0
        ],
        "rationale": "Changing a needle does not make a used syringe safe for another person. Intervene before exposure and report the unsafe practice.",
        "source": "mock-injection"
      },
      {
        "id": "rex-2026-applied-13",
        "type": "single",
        "category": "Safety and Infection Control",
        "stem": "A client is restless and tries to climb over bedrails. What is the best initial approach?",
        "options": [
          "Automatically raise every rail as a restraint.",
          "Ignore the behaviour until the client falls.",
          "Threaten to withdraw care if the client moves.",
          "Assess causes such as pain, toileting needs or confusion and provide safer individualized support."
        ],
        "answer": [
          3
        ],
        "rationale": "Restlessness may reflect unmet needs or deterioration. Assessment and individualized assistance are safer than automatic restraint or threats.",
        "source": "mock-standards"
      },
      {
        "id": "rex-2026-applied-14",
        "type": "single",
        "category": "Health Promotion and Maintenance",
        "stem": "A client agrees to a new exercise plan but reports chest discomfort during activity. Which teaching is most appropriate?",
        "options": [
          "Increase the intensity to build tolerance.",
          "Assume the symptom proves the plan is working.",
          "Stop the activity and seek appropriate assessment for the symptom.",
          "Continue until the discomfort becomes severe."
        ],
        "answer": [
          2
        ],
        "rationale": "New chest symptoms during activity require evaluation. Exercise advice should include symptom-related safety boundaries rather than encouragement to push through a possible emergency.",
        "source": "mock-plan"
      },
      {
        "id": "rex-2026-applied-15",
        "type": "single",
        "category": "Health Promotion and Maintenance",
        "stem": "A client with diabetes identifies barriers to monitoring glucose at work. What should the nurse do?",
        "options": [
          "Use another person's glucose readings as a substitute.",
          "Explore the barriers and help develop a practical monitoring plan.",
          "Record non-compliance without discussion.",
          "Advise stopping all monitoring on workdays."
        ],
        "answer": [
          1
        ],
        "rationale": "Effective teaching addresses the actual context of self-care. Labelling the client or using unrelated readings does not solve access or scheduling problems.",
        "source": "mock-hypo"
      },
      {
        "id": "rex-2026-applied-16",
        "type": "single",
        "category": "Health Promotion and Maintenance",
        "stem": "A client taught signs of low glucose says they will drive home while still shaky. What is the best response?",
        "options": [
          "Explain that glucose must be treated and safe recovery confirmed before driving.",
          "Recommend faster driving to reach food sooner.",
          "Suggest relying on an open window for alertness.",
          "Confirm that driving is safe because the client is awake."
        ],
        "answer": [
          0
        ],
        "rationale": "Hypoglycemia can impair attention and judgment. Being awake does not make driving safe; treatment and reassessment take priority.",
        "source": "mock-hypo"
      },
      {
        "id": "rex-2026-applied-17",
        "type": "single",
        "category": "Health Promotion and Maintenance",
        "stem": "A client has several new discharge instructions and says they cannot read the leaflet. What is the best response?",
        "options": [
          "Ask for a signature as the only evidence of understanding.",
          "Repeat the same leaflet in smaller print.",
          "Cancel teaching because it will take longer.",
          "Provide accessible teaching and check understanding using the client's preferred approach."
        ],
        "answer": [
          3
        ],
        "rationale": "Teaching should match the client's access needs. A signature and an inaccessible leaflet do not establish comprehension or ability to follow the plan.",
        "source": "mock-standards"
      },
      {
        "id": "rex-2026-applied-18",
        "type": "single",
        "category": "Psychosocial Integrity",
        "stem": "A client says a voice is telling them to injure another person. What should the nurse do first?",
        "options": [
          "Promise confidentiality regardless of risk.",
          "Leave the client alone to avoid upsetting them.",
          "Assess the immediate safety risk and initiate protective measures and escalation.",
          "Debate whether the voice exists."
        ],
        "answer": [
          2
        ],
        "rationale": "Command content involving harm requires immediate risk assessment. Safety and escalation are more urgent than debating the experience or promising secrecy.",
        "source": "mock-plan"
      },
      {
        "id": "rex-2026-applied-19",
        "type": "single",
        "category": "Psychosocial Integrity",
        "stem": "A client with anxiety is breathing rapidly but is able to speak and has no established medical assessment of the episode. What is appropriate?",
        "options": [
          "Ignore the symptoms until the client calms down.",
          "Assess physical and psychological findings and use calm supportive communication.",
          "Assume every episode is harmless anxiety.",
          "Have the client rebreathe into a paper bag without assessment."
        ],
        "answer": [
          1
        ],
        "rationale": "Do not attribute symptoms to anxiety without assessment. Calm communication can accompany evaluation; paper-bag rebreathing can be unsafe when the cause is uncertain.",
        "source": "mock-plan"
      },
      {
        "id": "rex-2026-applied-20",
        "type": "single",
        "category": "Psychosocial Integrity",
        "stem": "A client says, 'I feel ashamed that I need help with washing.' What is the best response?",
        "options": [
          "Ask what would help them feel more comfortable and support participation.",
          "Tell the client embarrassment is unreasonable.",
          "Provide care without discussing preferences.",
          "Tell other clients about the comment to normalize it."
        ],
        "answer": [
          0
        ],
        "rationale": "Dignity and autonomy are supported by eliciting preferences and preserving participation. Dismissal and inappropriate disclosure do not help.",
        "source": "mock-standards"
      },
      {
        "id": "rex-2026-applied-21",
        "type": "single",
        "category": "Psychosocial Integrity",
        "stem": "A distressed client repeatedly requests information about a delayed procedure. What is the best response?",
        "options": [
          "Invent a completion time to reassure the client.",
          "Avoid the client until the procedure begins.",
          "Guarantee that delays never affect care.",
          "Acknowledge the concern and provide verified updates or explain how information will be obtained."
        ],
        "answer": [
          3
        ],
        "rationale": "Use honest, understandable information and communicate uncertainty. An invented timeline may reduce trust and cannot support informed decisions.",
        "source": "mock-standards"
      },
      {
        "id": "rex-2026-applied-22",
        "type": "single",
        "category": "Psychosocial Integrity",
        "stem": "A family member asks the nurse to persuade a capable client to accept unwanted treatment. What is appropriate?",
        "options": [
          "Agree to conceal the treatment from the client.",
          "Tell the client their preferences are irrelevant.",
          "Explore concerns while keeping the client's informed preferences central.",
          "Treat the family's wishes as automatic consent."
        ],
        "answer": [
          2
        ],
        "rationale": "Family involvement can be valuable, but it does not automatically override a capable person's decision. Support informed discussion and consent.",
        "source": "mock-standards"
      },
      {
        "id": "rex-2026-applied-23",
        "type": "single",
        "category": "Basic Care and Comfort",
        "stem": "A client becomes drowsy while eating and begins coughing with each sip. What is the priority?",
        "options": [
          "Give a sedating medicine to reduce coughing.",
          "Stop oral intake and assess swallowing and airway safety.",
          "Encourage larger sips to finish the meal.",
          "Continue feeding to maintain the nutrition schedule."
        ],
        "answer": [
          1
        ],
        "rationale": "New drowsiness and coughing increase concern about aspiration. Stop intake and assess rather than prioritizing meal completion.",
        "source": "mock-swallow"
      },
      {
        "id": "rex-2026-applied-24",
        "type": "single",
        "category": "Basic Care and Comfort",
        "stem": "A client has reduced mobility and declining intake. Which prevention plan is most appropriate?",
        "options": [
          "Assess nutrition, skin and mobility needs and coordinate individualized pressure-injury prevention.",
          "Use a skin cream as the only intervention.",
          "Avoid repositioning because intake is poor.",
          "Assume a special mattress removes every risk."
        ],
        "answer": [
          0
        ],
        "rationale": "Multiple factors contribute to pressure injury. A coordinated assessment and prevention plan is more appropriate than relying on a single product.",
        "source": "mock-plan"
      },
      {
        "id": "rex-2026-applied-25",
        "type": "single",
        "category": "Basic Care and Comfort",
        "stem": "A client reports constipation after starting an opioid and has no severe pain, vomiting or distention. What is the best action?",
        "options": [
          "Stop every prescribed medicine without consultation.",
          "Wait until vomiting occurs before responding.",
          "Advise the client to ignore the change because it is common.",
          "Assess the bowel pattern and implement or seek an appropriate prevention and treatment plan."
        ],
        "answer": [
          3
        ],
        "rationale": "A common adverse effect still needs assessment and management. Escalate concerning findings and use the authorized plan rather than dismissing symptoms or independently stopping all therapy.",
        "source": "mock-medications"
      },
      {
        "id": "rex-2026-applied-26",
        "type": "single",
        "category": "Basic Care and Comfort",
        "stem": "A client requests help to the toilet after receiving a medicine that causes dizziness. What is most appropriate?",
        "options": [
          "Ask the client to crawl to the toilet.",
          "Restrict toileting for the entire shift.",
          "Assess current mobility and provide the required assistance.",
          "Tell the client to go alone because they did so yesterday."
        ],
        "answer": [
          2
        ],
        "rationale": "Mobility needs can change after medication. Current assessment and appropriate assistance reduce falls while respecting elimination needs.",
        "source": "mock-medications"
      },
      {
        "id": "rex-2026-applied-27",
        "type": "single",
        "category": "Pharmacological and Parenteral Therapies",
        "stem": "An order is for 0.25 mg. The available scored tablet contains 0.5 mg and may be split. How much is required?",
        "options": [
          "One whole tablet",
          "One-half tablet",
          "Two tablets",
          "Five tablets"
        ],
        "answer": [
          1
        ],
        "rationale": "0.25 mg divided by 0.5 mg per tablet equals 0.5 tablet. The stem confirms that splitting is appropriate; verify the actual product before administration.",
        "source": "mock-medications"
      },
      {
        "id": "rex-2026-applied-28",
        "type": "single",
        "category": "Pharmacological and Parenteral Therapies",
        "stem": "An order is for 750 mg. The liquid contains 250 mg per 5 mL. What volume is required?",
        "options": [
          "15 mL",
          "5 mL",
          "10 mL",
          "25 mL"
        ],
        "answer": [
          0
        ],
        "rationale": "750 divided by 250 equals 3 portions; 3 multiplied by 5 mL equals 15 mL. Keep the concentration units together to avoid a tenfold or proportion error.",
        "source": "mock-medications"
      },
      {
        "id": "rex-2026-applied-29",
        "type": "single",
        "category": "Pharmacological and Parenteral Therapies",
        "stem": "A 1,000 mL infusion is prescribed over 8 hours using a pump. What is the calculated rate?",
        "options": [
          "80 mL/hour",
          "100 mL/hour",
          "250 mL/hour",
          "125 mL/hour"
        ],
        "answer": [
          3
        ],
        "rationale": "1,000 mL divided by 8 hours equals 125 mL/hour. Confirm the order, solution and clinical context before implementing the rate.",
        "source": "mock-medications"
      },
      {
        "id": "rex-2026-applied-30",
        "type": "single",
        "category": "Pharmacological and Parenteral Therapies",
        "stem": "Two active orders appear to prescribe different doses of the same medicine at the same time. What should the nurse do?",
        "options": [
          "Average the doses without consultation.",
          "Give the larger dose because it is newer in the display.",
          "Resolve the discrepancy before administering either conflicting dose.",
          "Give both doses to satisfy both orders."
        ],
        "answer": [
          2
        ],
        "rationale": "Conflicting orders require clarification. Adding or averaging doses is not an authorized substitute for resolving the intended prescription.",
        "source": "mock-medications"
      },
      {
        "id": "rex-2026-applied-31",
        "type": "single",
        "category": "Pharmacological and Parenteral Therapies",
        "stem": "A client on anticoagulant treatment reports new black, tarry stool. What should the nurse do?",
        "options": [
          "Document it without communicating the new finding.",
          "Assess for bleeding and promptly notify the appropriate clinician.",
          "Assume it is always a normal medication effect.",
          "Encourage an extra anticoagulant dose."
        ],
        "answer": [
          1
        ],
        "rationale": "Black tarry stool can indicate gastrointestinal bleeding. Anticoagulation increases the significance of a new bleeding concern; assess and escalate rather than reassuring without evaluation.",
        "source": "mock-bleeding"
      },
      {
        "id": "rex-2026-applied-32",
        "type": "single",
        "category": "Pharmacological and Parenteral Therapies",
        "stem": "A client taking an opioid becomes more sedated than at baseline. What is the best assessment focus before another dose?",
        "options": [
          "Consciousness, respiratory rate and adequacy of breathing.",
          "Only the time since the last bowel movement.",
          "Only the client's preference for the medication.",
          "Whether the medication label looks clean."
        ],
        "answer": [
          0
        ],
        "rationale": "Sedation may precede respiratory compromise. Assess ventilation and alertness before further opioid administration; other observations do not establish respiratory safety.",
        "source": "mock-opioid"
      },
      {
        "id": "rex-2026-applied-33",
        "type": "single",
        "category": "Pharmacological and Parenteral Therapies",
        "stem": "A client brings an unlabelled container of tablets from home. What is safest before using them in hospital?",
        "options": [
          "Administer them based on the client's description alone.",
          "Mix them with the hospital supply.",
          "Document a guessed medication name.",
          "Follow the medication-reconciliation and identification process."
        ],
        "answer": [
          3
        ],
        "rationale": "Medication identity and orders must be verified through the approved process. A guess or mixed supply can cause incorrect treatment.",
        "source": "mock-medications"
      },
      {
        "id": "rex-2026-applied-34",
        "type": "single",
        "category": "Reduction of Risk Potential",
        "stem": "A client with a postoperative wound develops spreading redness and new drainage. What is appropriate?",
        "options": [
          "Assume drainage is always expected.",
          "Ask the client to remove the dressing independently.",
          "Assess and report the change for timely evaluation.",
          "Wait until the dressing is due the next day."
        ],
        "answer": [
          2
        ],
        "rationale": "New or increasing inflammatory findings require evaluation rather than an assumption that every change is routine after surgery.",
        "source": "mock-plan"
      },
      {
        "id": "rex-2026-applied-35",
        "type": "single",
        "category": "Reduction of Risk Potential",
        "stem": "A client with kidney disease has a potassium result of 6.2 mmol/L, newly reported as critical. What is the priority?",
        "options": [
          "Ignore it if the client reports no pain.",
          "Assess promptly and escalate for urgent management and cardiac monitoring as indicated.",
          "Encourage potassium supplements.",
          "Repeat the result during next month's clinic visit."
        ],
        "answer": [
          1
        ],
        "rationale": "High potassium can disrupt cardiac conduction and may be dangerous without pain. A critical result warrants prompt clinical response, not additional potassium or prolonged delay.",
        "source": "mock-potassium"
      },
      {
        "id": "rex-2026-applied-36",
        "type": "single",
        "category": "Reduction of Risk Potential",
        "stem": "A client develops new tingling and swelling distal to a limb dressing. What should the nurse do?",
        "options": [
          "Promptly assess circulation and sensation and escalate possible constriction.",
          "Apply an additional tight layer.",
          "Assume tingling means healing is complete.",
          "Wait until the next scheduled visit."
        ],
        "answer": [
          0
        ],
        "rationale": "Distal swelling and sensory changes can signal impaired circulation or pressure. Assess and seek timely correction; added constriction can worsen the problem.",
        "source": "mock-cast"
      },
      {
        "id": "rex-2026-applied-37",
        "type": "single",
        "category": "Reduction of Risk Potential",
        "stem": "A client has been vomiting and now reports dizziness when standing. What is most appropriate?",
        "options": [
          "Encourage walking alone to improve strength.",
          "Assume the dizziness is unrelated to fluid loss.",
          "Delay assessment until the client faints.",
          "Assess hydration, vital signs and fall risk and communicate concerning findings."
        ],
        "answer": [
          3
        ],
        "rationale": "Vomiting can contribute to fluid loss and orthostatic symptoms. Assessment and assistance address both physiological and immediate injury risk.",
        "source": "mock-plan"
      },
      {
        "id": "rex-2026-applied-38",
        "type": "single",
        "category": "Physiological Adaptation",
        "stem": "A client suddenly has severe breathlessness and cannot speak in full sentences. What is the priority?",
        "options": [
          "Give food to build strength.",
          "Leave the client alone for a scheduled round.",
          "Activate urgent help while assessing and supporting airway and breathing.",
          "Start routine discharge paperwork."
        ],
        "answer": [
          2
        ],
        "rationale": "Severe respiratory distress requires immediate assessment and support. Routine tasks and oral intake are not priorities and may delay lifesaving care.",
        "source": "mock-plan"
      },
      {
        "id": "rex-2026-applied-39",
        "type": "single",
        "category": "Physiological Adaptation",
        "stem": "A person treated with naloxone becomes drowsy again. What should the nurse understand?",
        "options": [
          "No further breathing assessment is needed.",
          "Respiratory depression can recur and continued assessment and emergency treatment may be needed.",
          "The recurrence proves that naloxone cannot work.",
          "The person is necessarily safe because one dose was given."
        ],
        "answer": [
          1
        ],
        "rationale": "Naloxone may wear off before the opioid. Recurrent sedation or slow breathing requires reassessment and appropriate emergency measures.",
        "source": "mock-opioid"
      },
      {
        "id": "rex-2026-applied-40",
        "type": "single",
        "category": "Physiological Adaptation",
        "stem": "A client with new unilateral weakness says the symptoms have now improved. What is the best action?",
        "options": [
          "Arrange urgent evaluation for possible stroke or transient ischemic attack.",
          "Cancel evaluation because improvement excludes stroke risk.",
          "Advise waiting for the symptoms to occur again.",
          "Give a meal before any swallowing assessment."
        ],
        "answer": [
          0
        ],
        "rationale": "Resolved focal symptoms can still represent a transient ischemic attack and need urgent assessment. Improvement is not a reason to dismiss the event.",
        "source": "mock-stroke"
      }
    ]
  },
  {
    "id": "rex-mock-challenge-v1",
    "title": "Mock 3: Clinical Challenge",
    "difficulty": "Clinical Challenge",
    "description": "Integrate changing findings, prioritize competing needs and identify time-sensitive safety concerns.",
    "minutes": 60,
    "version": 1,
    "questions": [
      {
        "id": "rex-2026-challenge-1",
        "type": "single",
        "category": "Management of Care",
        "stem": "At handover, which client should the nurse assess first?",
        "options": [
          "A client with a longstanding cough who is speaking comfortably and has unchanged observations.",
          "A client who was alert earlier and is now difficult to arouse with a respiratory rate of 7/min.",
          "A client awaiting prescribed analgesia for unchanged incisional pain rated 5/10.",
          "A client whose wound dressing needs replacement after a small amount of expected drainage."
        ],
        "answer": [
          1
        ],
        "rationale": "The new change in consciousness with slow breathing suggests an immediate threat to ventilation. The other needs remain important but do not present the same urgent physiological risk.",
        "source": "mock-opioid"
      },
      {
        "id": "rex-2026-challenge-2",
        "type": "single",
        "category": "Management of Care",
        "stem": "A medication reconciliation shows an essential home medicine missing from discharge orders. What is the best action before discharge?",
        "options": [
          "Leave the discrepancy for the client to resolve after discharge.",
          "Clarify the intended plan with the prescriber and pharmacist.",
          "Tell the client to guess whether to restart it.",
          "Copy the old order without authorization."
        ],
        "answer": [
          1
        ],
        "rationale": "Unresolved medication discrepancies can disrupt safe transitions. Clarify the intended treatment rather than assuming continuation or discontinuation.",
        "source": "mock-medications"
      },
      {
        "id": "rex-2026-challenge-3",
        "type": "single",
        "category": "Management of Care",
        "stem": "A client refuses an intervention, and a colleague says the client lacks capacity because they disagree with the team. What should the nurse do?",
        "options": [
          "Avoid equating disagreement with incapacity and follow the appropriate capacity and consent process.",
          "Accept the colleague's statement as a complete assessment.",
          "Force the intervention before the client can object.",
          "Ask the family to sign regardless of the client's capacity."
        ],
        "answer": [
          0
        ],
        "rationale": "Disagreement is not itself proof of incapacity. Consent decisions must follow the appropriate assessment and legal process, with the client's preferences respected.",
        "source": "mock-standards"
      },
      {
        "id": "rex-2026-challenge-4",
        "type": "single",
        "category": "Management of Care",
        "stem": "A client needs a complex intervention beyond the assigned nurse's individual competence, and no immediate life threat is present. What is the safest plan?",
        "options": [
          "Proceed independently to avoid delaying the schedule.",
          "Delegate the procedure to an untrained support worker.",
          "Ask the client to waive the competence requirement.",
          "Arrange competent support or an appropriate reassignment before the intervention."
        ],
        "answer": [
          3
        ],
        "rationale": "The nurse must recognize competence limits and coordinate a safe response. Neither workload pressure nor a client's agreement removes professional requirements.",
        "source": "mock-standards"
      },
      {
        "id": "rex-2026-challenge-5",
        "type": "single",
        "category": "Management of Care",
        "stem": "A support worker reports that a normally independent client is newly confused before a routine shower. What should the nurse do?",
        "options": [
          "Ask the worker to diagnose dementia.",
          "Record the change as normal aging without assessment.",
          "Assess the new change before proceeding with the routine plan.",
          "Continue the shower because it was scheduled."
        ],
        "answer": [
          2
        ],
        "rationale": "Acute confusion may indicate deterioration and changes the care priority. It should be assessed rather than treated as routine aging or delegated diagnosis.",
        "source": "mock-plan"
      },
      {
        "id": "rex-2026-challenge-6",
        "type": "single",
        "category": "Management of Care",
        "stem": "A capable client asks that a relative leave during a sensitive assessment. The relative insists on staying. What should the nurse do?",
        "options": [
          "Avoid the assessment entirely without discussing alternatives.",
          "Support the client's privacy preference and arrange the assessment accordingly.",
          "Allow the relative to stay because they provide transport.",
          "Conduct the assessment in front of everyone."
        ],
        "answer": [
          1
        ],
        "rationale": "The client's informed preferences guide access to sensitive information and participation. A practical caregiving role does not automatically authorize presence during every assessment.",
        "source": "mock-standards"
      },
      {
        "id": "rex-2026-challenge-7",
        "type": "single",
        "category": "Management of Care",
        "stem": "A nurse discovers a medication error after administration. The client appears well. What is the priority response?",
        "options": [
          "Assess the client, initiate required clinical follow-up and report and document the error appropriately.",
          "Wait for symptoms before informing the team.",
          "Alter the administration record to match the order.",
          "Ask the client not to discuss the error."
        ],
        "answer": [
          0
        ],
        "rationale": "Absence of immediate symptoms does not rule out harm. Prompt assessment and appropriate follow-up are necessary, alongside transparent reporting and accurate documentation.",
        "source": "mock-medications"
      },
      {
        "id": "rex-2026-challenge-8",
        "type": "single",
        "category": "Management of Care",
        "stem": "A client is discharged with a plan that requires equipment unavailable at home. What should the nurse do?",
        "options": [
          "Record education as complete and ignore the missing equipment.",
          "Tell the client to substitute any household item.",
          "Assume the family will obtain equipment without confirmation.",
          "Escalate the gap and coordinate a feasible plan before discharge proceeds."
        ],
        "answer": [
          3
        ],
        "rationale": "A discharge plan must be workable. Confirm resources and resolve safety gaps rather than rely on unverified assumptions about equipment or support.",
        "source": "mock-standards"
      },
      {
        "id": "rex-2026-challenge-9",
        "type": "single",
        "category": "Safety and Infection Control",
        "stem": "A client is newly confused, repeatedly attempts to stand and has a full bladder. What is the best first approach to fall prevention?",
        "options": [
          "Sedate the client solely to reduce calls for help.",
          "Move the call bell out of reach.",
          "Assess and address the immediate need with safe assisted toileting and appropriate monitoring.",
          "Use bedrails as the only intervention."
        ],
        "answer": [
          2
        ],
        "rationale": "An unmet elimination need can contribute to unsafe attempts to mobilize. Address the need with individualized assistance; barriers to help can increase risk.",
        "source": "mock-standards"
      },
      {
        "id": "rex-2026-challenge-10",
        "type": "single",
        "category": "Safety and Infection Control",
        "stem": "A staff member's contaminated gloves touch a clean wound-dressing field. What should the nurse do?",
        "options": [
          "Finish quickly to reduce the time of exposure.",
          "Stop and replace contaminated supplies and re-establish the appropriate clean or sterile field.",
          "Continue because contamination is not visible.",
          "Wipe the supplies with a dry towel."
        ],
        "answer": [
          1
        ],
        "rationale": "Loss of the required field integrity calls for corrective action. Visible appearance does not establish cleanliness, and speed does not undo contamination.",
        "source": "mock-hygiene"
      },
      {
        "id": "rex-2026-challenge-11",
        "type": "single",
        "category": "Safety and Infection Control",
        "stem": "A client has suspected airborne infection and needs urgent transport. What is the safest plan?",
        "options": [
          "Coordinate necessary care using the infection-specific source-control, transport and receiving-unit precautions.",
          "Delay all urgent care until the diagnosis is final.",
          "Remove precautions during transport to avoid concern.",
          "Use gloves alone for every airborne exposure."
        ],
        "answer": [
          0
        ],
        "rationale": "Urgent care and infection prevention must be coordinated. Follow the specific precaution plan and communicate it rather than choose between treatment and protection.",
        "source": "mock-hygiene"
      },
      {
        "id": "rex-2026-challenge-12",
        "type": "single",
        "category": "Safety and Infection Control",
        "stem": "A client fell while trying to reach a walking aid stored across the room. What should the nurse do after immediate post-fall assessment and treatment?",
        "options": [
          "Focus only on whether the client followed instructions.",
          "Return the aid to the same inaccessible location.",
          "Assume assessment alone prevents another fall.",
          "Review the environment and revise the individualized mobility and fall-prevention plan."
        ],
        "answer": [
          3
        ],
        "rationale": "After addressing injury, examine modifiable contributors. A revised accessible care plan addresses the circumstances of the fall better than blame or an unchanged environment.",
        "source": "mock-standards"
      },
      {
        "id": "rex-2026-challenge-13",
        "type": "single",
        "category": "Safety and Infection Control",
        "stem": "A colleague proposes sharing insulin pens between clients after changing needles. What is the correct response?",
        "options": [
          "Approve it if the clients share a room.",
          "Allow sharing only when the pen looks clean.",
          "Stop the plan; each pen must be used for only one person.",
          "Approve it because insulin is the same medication."
        ],
        "answer": [
          2
        ],
        "rationale": "Changing needles does not make an insulin pen safe to share. Blood contamination may occur; use each pen for one person and follow the organization's safety procedures.",
        "source": "mock-injection"
      },
      {
        "id": "rex-2026-challenge-14",
        "type": "single",
        "category": "Health Promotion and Maintenance",
        "stem": "A client demonstrates glucose testing correctly but cannot explain what to do with a low result. What is the teaching priority?",
        "options": [
          "Increase testing frequency without discussing the results.",
          "Teach and verify the response to low glucose, including reassessment and when to seek help.",
          "Repeat only the device-cleaning instructions.",
          "Record the entire self-management plan as mastered."
        ],
        "answer": [
          1
        ],
        "rationale": "A measurement skill without an action plan leaves a safety gap. Teach and check what the client will do when results require treatment or assistance.",
        "source": "mock-hypo"
      },
      {
        "id": "rex-2026-challenge-15",
        "type": "single",
        "category": "Health Promotion and Maintenance",
        "stem": "A client is preparing for discharge after a possible transient ischemic attack and says, 'I will wait overnight if weakness returns.' What needs correction?",
        "options": [
          "New stroke-type symptoms require immediate emergency assessment.",
          "Every future symptom should be ignored if it resolves.",
          "The client should eat before calling for help.",
          "Only symptoms causing pain require urgent assessment."
        ],
        "answer": [
          0
        ],
        "rationale": "Sudden focal neurological symptoms are time-critical even if transient. Waiting overnight can delay evaluation and treatment.",
        "source": "mock-stroke"
      },
      {
        "id": "rex-2026-challenge-16",
        "type": "single",
        "category": "Health Promotion and Maintenance",
        "stem": "A client reports new difficulty accessing supplies for home glucose monitoring. Which action best addresses safe discharge?",
        "options": [
          "Ask the client to record symptoms and review the supply problem at next month's appointment.",
          "Provide the standard monitoring leaflet again and document that instructions were given.",
          "Clarify access barriers and coordinate a feasible supply and monitoring plan before discharge.",
          "Ask a support person to remind the client about testing without confirming access to supplies."
        ],
        "answer": [
          2
        ],
        "rationale": "Self-management requires both understanding and access to equipment. Resolve the practical barrier and verify a workable plan rather than relying on repeated information or assumptions about support.",
        "source": "mock-standards"
      },
      {
        "id": "rex-2026-challenge-17",
        "type": "single",
        "category": "Health Promotion and Maintenance",
        "stem": "A client uses a naloxone kit and says no further help is necessary once the person wakes. What should the nurse clarify?",
        "options": [
          "Naloxone prevents every future overdose.",
          "Breathing assessment is unnecessary after waking.",
          "Emergency help and continued observation are needed because overdose symptoms may recur.",
          "A single response guarantees permanent reversal."
        ],
        "answer": [
          2
        ],
        "rationale": "Naloxone acts temporarily and symptoms may recur. Emergency care and monitoring remain essential even after initial improvement.",
        "source": "mock-opioid"
      },
      {
        "id": "rex-2026-challenge-18",
        "type": "single",
        "category": "Psychosocial Integrity",
        "stem": "A client threatens harm and has access to an object that could be used as a weapon. What is the priority?",
        "options": [
          "Continue a lengthy discussion about unrelated history.",
          "Follow the immediate safety and emergency response plan while maintaining safe distance.",
          "Approach alone and attempt an unplanned physical confrontation.",
          "Promise complete secrecy about the threat."
        ],
        "answer": [
          1
        ],
        "rationale": "An immediate risk requires an organized protective response and staff safety. Unplanned confrontation and delayed assessment can increase harm.",
        "source": "mock-plan"
      },
      {
        "id": "rex-2026-challenge-19",
        "type": "single",
        "category": "Psychosocial Integrity",
        "stem": "A client who is grieving says they have a specific plan to end their life tonight. What should the nurse prioritize?",
        "options": [
          "Immediate safety measures and urgent suicide-risk assessment and escalation.",
          "Treat the statement as ordinary grief without assessment.",
          "Offer reassurance and leave the client alone.",
          "Ask the client to delay discussing it until next week."
        ],
        "answer": [
          0
        ],
        "rationale": "A specific near-term self-harm plan is an urgent safety concern, even in the context of grief. Protect and assess rather than normalize the stated intention.",
        "source": "mock-suicide"
      },
      {
        "id": "rex-2026-challenge-20",
        "type": "single",
        "category": "Psychosocial Integrity",
        "stem": "A client reports threatening voices but denies plans to act. Which further assessment is most important?",
        "options": [
          "Only the client's favourite television program.",
          "Whether the nurse personally believes in voices.",
          "Whether the client can ignore every question about safety.",
          "The content, degree of control, access to means and immediate safety risk."
        ],
        "answer": [
          3
        ],
        "rationale": "A denial of intent is one part of assessment, not the whole assessment. Explore command content, control and immediate risk while using respectful reality-based communication.",
        "source": "mock-plan"
      },
      {
        "id": "rex-2026-challenge-21",
        "type": "single",
        "category": "Psychosocial Integrity",
        "stem": "A client who was calm becomes agitated, sweaty and confused shortly after insulin administration and before eating. What should the nurse prioritize?",
        "options": [
          "Demand an apology before continuing care.",
          "Discuss discharge plans as the only intervention.",
          "Assess glucose and other immediate physiological findings while ensuring safety.",
          "Assume a behavioural problem and postpone physical assessment."
        ],
        "answer": [
          2
        ],
        "rationale": "An acute behavioural change may have a physiological cause such as hypoglycemia. Immediate assessment and safety take priority over labelling or punitive responses.",
        "source": "mock-hypo"
      },
      {
        "id": "rex-2026-challenge-22",
        "type": "single",
        "category": "Psychosocial Integrity",
        "stem": "A client says a staff member disclosed their private information. What is the best response?",
        "options": [
          "Promise a specific disciplinary outcome before investigation.",
          "Listen, clarify the concern and follow the privacy response and reporting process.",
          "Dismiss the concern because staff are always trustworthy.",
          "Discuss the allegation publicly with other clients."
        ],
        "answer": [
          1
        ],
        "rationale": "Take the concern seriously and use the appropriate process. Do not disclose additional information or promise an outcome that has not been established.",
        "source": "mock-standards"
      },
      {
        "id": "rex-2026-challenge-23",
        "type": "single",
        "category": "Basic Care and Comfort",
        "stem": "A client with swallowing precautions is alert at breakfast but becomes drowsy after a sedating medicine at lunch. What should guide feeding assistance?",
        "options": [
          "Reassess alertness and swallowing safety before oral intake.",
          "Use the breakfast assessment as sufficient for the whole day.",
          "Give thin liquids to improve wakefulness.",
          "Continue feeding at the previous rate despite coughing."
        ],
        "answer": [
          0
        ],
        "rationale": "A change in consciousness can change aspiration risk. Reassessment is needed; an earlier safe meal does not guarantee current swallowing safety.",
        "source": "mock-swallow"
      },
      {
        "id": "rex-2026-challenge-24",
        "type": "single",
        "category": "Basic Care and Comfort",
        "stem": "A client's pain increases sharply and is accompanied by new numbness beneath a limb immobilizer. What is the priority?",
        "options": [
          "Provide distraction without physical assessment.",
          "Wait for the next routine analgesic time.",
          "Tighten the immobilizer because pain means movement.",
          "Assess possible neurovascular compromise and escalate urgently."
        ],
        "answer": [
          3
        ],
        "rationale": "Pain with new sensory change may indicate a time-sensitive complication. Analgesia or distraction alone does not address possible compromised circulation or nerve compression.",
        "source": "mock-cast"
      },
      {
        "id": "rex-2026-challenge-25",
        "type": "single",
        "category": "Basic Care and Comfort",
        "stem": "A client on opioids reports no bowel movement for several days, new vomiting and marked abdominal distention. What is appropriate?",
        "options": [
          "Encourage a large meal before evaluation.",
          "Assume this is uncomplicated constipation because an opioid is prescribed.",
          "Promptly assess and escalate for possible obstruction or other serious complication.",
          "Give a routine laxative without assessment."
        ],
        "answer": [
          2
        ],
        "rationale": "Vomiting and marked distention are red flags beyond routine constipation. Further evaluation is needed before treating it as a simple predictable adverse effect.",
        "source": "mock-bowel"
      },
      {
        "id": "rex-2026-challenge-26",
        "type": "single",
        "category": "Basic Care and Comfort",
        "stem": "A client dependent on assistance has worsening sacral skin changes despite a mattress change. What is the best next step?",
        "options": [
          "Keep the client in the same position to avoid discomfort.",
          "Reassess pressure, mobility, moisture and nutrition and revise the combined prevention plan.",
          "Assume the mattress makes further assessment unnecessary.",
          "Massage the damaged area firmly."
        ],
        "answer": [
          1
        ],
        "rationale": "A support surface is only one intervention. Persistent deterioration requires reassessment of the full set of contributing factors and an individualized response.",
        "source": "mock-plan"
      },
      {
        "id": "rex-2026-challenge-27",
        "type": "single",
        "category": "Pharmacological and Parenteral Therapies",
        "stem": "A prescribed infusion is 600 mL over 5 hours. The pump requires mL/hour. What rate is calculated?",
        "options": [
          "120 mL/hour",
          "100 mL/hour",
          "150 mL/hour",
          "300 mL/hour"
        ],
        "answer": [
          0
        ],
        "rationale": "600 mL divided by 5 hours equals 120 mL/hour. Confirm the order and solution before programming the pump.",
        "source": "mock-medications"
      },
      {
        "id": "rex-2026-challenge-28",
        "type": "single",
        "category": "Pharmacological and Parenteral Therapies",
        "stem": "A medicine order is 0.4 g. The supplied tablets contain 200 mg and are appropriate for this order. How many tablets are needed?",
        "options": [
          "0.2 tablet",
          "4 tablets",
          "20 tablets",
          "2 tablets"
        ],
        "answer": [
          3
        ],
        "rationale": "0.4 g equals 400 mg. 400 mg divided by 200 mg per tablet equals 2 tablets. Converting the units first prevents a thousandfold unit error.",
        "source": "mock-medications"
      },
      {
        "id": "rex-2026-challenge-29",
        "type": "single",
        "category": "Pharmacological and Parenteral Therapies",
        "stem": "The prescribed liquid dose is 12 mg. The bottle states 4 mg per 2 mL. What volume is needed?",
        "options": [
          "12 mL",
          "24 mL",
          "6 mL",
          "3 mL"
        ],
        "answer": [
          2
        ],
        "rationale": "12 divided by 4 equals 3 portions of 2 mL, so the required volume is 6 mL. The concentration is per 2 mL, not per 1 mL.",
        "source": "mock-medications"
      },
      {
        "id": "rex-2026-challenge-30",
        "type": "single",
        "category": "Pharmacological and Parenteral Therapies",
        "stem": "A client has a scheduled opioid dose but is newly difficult to arouse with breathing at 7/min. What should the nurse do?",
        "options": [
          "Wait for the client to request another assessment.",
          "Withhold the additional dose and initiate emergency assessment and breathing support according to protocol.",
          "Give the dose because it is scheduled.",
          "Offer the medicine with food to reduce sedation."
        ],
        "answer": [
          1
        ],
        "rationale": "The immediate concern is respiratory depression. A schedule does not make another dose safe; urgent assessment and supportive or reversal measures are needed.",
        "source": "mock-opioid"
      },
      {
        "id": "rex-2026-challenge-31",
        "type": "single",
        "category": "Pharmacological and Parenteral Therapies",
        "stem": "A client has repeated low glucose after treatment and is taking a glucose-lowering medicine. What is the best action?",
        "options": [
          "Continue protocol-directed treatment and reassessment and escalate the persistent problem.",
          "Assume the first treatment permanently resolved the risk.",
          "Give extra glucose-lowering medicine to stabilize the level.",
          "Send the client away without a plan for recurrence."
        ],
        "answer": [
          0
        ],
        "rationale": "Repeated low glucose requires ongoing treatment, reassessment and review of contributing medication factors. Initial improvement does not establish lasting safety.",
        "source": "mock-hypo"
      },
      {
        "id": "rex-2026-challenge-32",
        "type": "single",
        "category": "Pharmacological and Parenteral Therapies",
        "stem": "A medication order uses a trailing zero, '5.0 mg', and the dose is difficult to read. What should the nurse do?",
        "options": [
          "Interpret it as 50 mg if the decimal is unclear.",
          "Ask the client to choose between 5 and 50 mg.",
          "Administer first and correct the writing afterward.",
          "Clarify the intended dose using the approved safe-order process."
        ],
        "answer": [
          3
        ],
        "rationale": "An unclear decimal can create a tenfold error. Clarify before administration rather than guess or transfer the prescribing decision to the client.",
        "source": "mock-medications"
      },
      {
        "id": "rex-2026-challenge-33",
        "type": "single",
        "category": "Pharmacological and Parenteral Therapies",
        "stem": "A client on several medicines has new dizziness and falls after a regimen change. What is most appropriate?",
        "options": [
          "Assume age alone explains every fall.",
          "Add a sedating medicine without an order.",
          "Assess the client and request a coordinated medication review while implementing immediate safety measures.",
          "Stop all medicines permanently without consultation."
        ],
        "answer": [
          2
        ],
        "rationale": "The temporal change warrants assessment of medication contributions and other causes. Safety measures and coordinated review are preferable to unsupported assumptions or blanket discontinuation.",
        "source": "mock-medications"
      },
      {
        "id": "rex-2026-challenge-34",
        "type": "single",
        "category": "Reduction of Risk Potential",
        "stem": "After a procedure, a client is newly confused, with blood pressure 86/50 mmHg and substantially reduced urine output. What should the nurse prioritize?",
        "options": [
          "Offer an explanation of the procedure and reassess the blood pressure during the next routine round.",
          "Provide a quiet environment for confusion before addressing the other changes.",
          "Assess and escalate the combined findings for urgent evaluation of possible reduced perfusion.",
          "Document each observation separately and complete planned discharge teaching first."
        ],
        "answer": [
          2
        ],
        "rationale": "Several new findings together can indicate reduced perfusion or another serious complication. Recognize the pattern and obtain timely assessment and management.",
        "source": "mock-plan"
      },
      {
        "id": "rex-2026-challenge-35",
        "type": "single",
        "category": "Reduction of Risk Potential",
        "stem": "A client's potassium is reported as critically high, but the sample may be affected by collection problems. What should the nurse do?",
        "options": [
          "Promptly communicate the result and assessment findings and arrange clarification without dismissing the risk.",
          "Discard the result independently because it might be inaccurate.",
          "Give potassium supplements while waiting.",
          "Delay all communication until the next scheduled visit."
        ],
        "answer": [
          0
        ],
        "rationale": "Possible sample error requires clarification, not dismissal. A potentially dangerous result and the client's clinical status must be promptly assessed and communicated.",
        "source": "mock-potassium"
      },
      {
        "id": "rex-2026-challenge-36",
        "type": "single",
        "category": "Reduction of Risk Potential",
        "stem": "A client with a cast has worsening pain despite prescribed analgesia, new numbness and fingers that are cooler than the other hand. What is the priority?",
        "options": [
          "Give reassurance because analgesia was already administered.",
          "Apply a heating pad directly beneath the cast.",
          "Wait for swelling to disappear before reporting.",
          "Urgently escalate possible neurovascular compromise while continuing focused assessment."
        ],
        "answer": [
          3
        ],
        "rationale": "Persistent pain with sensory and temperature changes raises concern for impaired circulation or nerve function. These findings require urgent evaluation rather than additional delay.",
        "source": "mock-cast"
      },
      {
        "id": "rex-2026-challenge-37",
        "type": "single",
        "category": "Reduction of Risk Potential",
        "stem": "After a medication change, a client has vomiting, poor intake and a new critical electrolyte result. What is the best response?",
        "options": [
          "Encourage self-adjustment of all medicines.",
          "File the result because vomiting is common.",
          "Integrate the clinical findings, promptly escalate and seek review of fluids and medicines.",
          "Consider the laboratory result unrelated without assessment."
        ],
        "answer": [
          2
        ],
        "rationale": "Combine clinical changes with critical results when evaluating risk. Timely assessment and coordinated treatment are needed instead of dismissing individual findings.",
        "source": "mock-potassium"
      },
      {
        "id": "rex-2026-challenge-38",
        "type": "single",
        "category": "Physiological Adaptation",
        "stem": "A client who was speaking normally 20 minutes ago develops facial droop and one-sided weakness. A routine appointment is scheduled in two hours. What should the nurse do?",
        "options": [
          "Ask the family to drive later if symptoms persist.",
          "Activate the stroke emergency response now and report the last known well time.",
          "Wait for the scheduled appointment.",
          "Offer a drink and observe swallowing without an assessment plan."
        ],
        "answer": [
          1
        ],
        "rationale": "Acute focal neurological deficits require immediate response. Last known well information helps time-sensitive assessment; a routine appointment does not replace emergency care.",
        "source": "mock-stroke"
      },
      {
        "id": "rex-2026-challenge-39",
        "type": "single",
        "category": "Physiological Adaptation",
        "stem": "An unresponsive client has suspected opioid exposure and very slow breathing. What is the priority approach?",
        "options": [
          "Activate emergency response and provide breathing support and naloxone according to the applicable protocol.",
          "Wait for laboratory confirmation before helping breathing.",
          "Give oral fluids to improve alertness.",
          "Assume sleep is protective and leave the client alone."
        ],
        "answer": [
          0
        ],
        "rationale": "Treat the immediate threat to ventilation without waiting for confirmation. Naloxone is part of the appropriate overdose response but does not replace assessment and breathing support.",
        "source": "mock-opioid"
      },
      {
        "id": "rex-2026-challenge-40",
        "type": "single",
        "category": "Physiological Adaptation",
        "stem": "A client with diabetes is confused, cannot swallow safely and has a very low measured glucose. What is the safest action?",
        "options": [
          "Force juice into the client's mouth.",
          "Give a scheduled rapid-acting insulin dose.",
          "Leave the client alone with glucose tablets.",
          "Initiate the emergency hypoglycemia response using prescribed non-oral treatment and airway assessment."
        ],
        "answer": [
          3
        ],
        "rationale": "Unsafe swallowing rules out oral carbohydrate. Emergency assessment and prescribed non-oral treatment are needed to restore glucose without causing aspiration.",
        "source": "mock-swallow"
      }
    ]
  }
];
const originalMockSources={
  "mock-plan": [
    "NCSBN: revised 2022 REx-PN content framework",
    "https://www.rexpn.com/files/2025_RexPN-Update.pdf"
  ],
  "mock-standards": [
    "BCCNM: LPN practice standards",
    "https://www.bccnm.ca/LPN/PracticeStandards/Pages/Default.aspx"
  ],
  "mock-medications": [
    "BCCNM: medication practice standard",
    "https://www.bccnm.ca/RN/PracticeStandards/pages/medication.aspx"
  ],
  "mock-hygiene": [
    "BCCDC: hand hygiene",
    "https://www.bccdc.ca/health-info/prevention-public-health/hand-hygiene"
  ],
  "mock-hypo": [
    "HealthLink BC: low blood glucose",
    "https://www.healthlinkbc.ca/healthwise/diabetes-dealing-low-blood-sugar-insulin-or-medicine"
  ],
  "mock-stroke": [
    "HealthLink BC: transient ischemic attack and stroke warning signs",
    "https://www.healthlinkbc.ca/healthwise/transient-ischemic-attack-tia"
  ],
  "mock-opioid": [
    "HealthLink BC: naloxone and opioid poisoning",
    "https://www.healthlinkbc.ca/healthlinkbc-files/naloxone-treating-opioid-poisoning-overdose"
  ],
  "mock-potassium": [
    "HealthLink BC: potassium",
    "https://www.healthlinkbc.ca/healthwise/potassium"
  ],
  "mock-injection": [
    "CDC: safe insulin administration and injection equipment",
    "https://www.cdc.gov/injection-safety/hcp/infection-control/index.html"
  ],
  "mock-cast": [
    "South Tees NHS: caring for your cast",
    "https://www.southtees.nhs.uk/resources/adult-caring-for-your-cast/"
  ],
  "mock-swallow": [
    "NHS: dysphagia",
    "https://www.nhs.uk/symptoms/swallowing-problems-dysphagia/"
  ],
  "mock-bowel": [
    "HealthLink BC: bowel obstruction",
    "https://www.healthlinkbc.ca/healthwise/bowel-obstruction"
  ],
  "mock-bleeding": [
    "NHS: anticoagulants and black stool",
    "https://www.nhs.uk/symptoms/bleeding-from-the-bottom-rectal-bleeding/"
  ],
  "mock-suicide": [
    "NIMH: suicide warning signs",
    "https://www.nimh.nih.gov/health/publications/warning-signs-of-suicide"
  ]
};


export const mockExams=[...originalMockExams,...additionalMocks];
export const mockSources={...originalMockSources,...additionalSources};
