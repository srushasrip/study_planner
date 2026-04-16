function generatePlan() {
  let subjects = document.getElementById("subjects").value;
  let weak = document.getElementById("weak").value;
  let hours = document.getElementById("hours").value;

  let prompt = `
You are a smart academic planner.

Subjects: ${subjects}
Weak topics: ${weak}
Study hours per day: ${hours}

Create a 7-day study plan.
Focus more on weak topics.
Divide into morning and evening.
Keep it realistic.
`;

  console.log("AI Prompt:", prompt);

  let plan = `
📅 7-Day Smart Study Plan

Subjects: ${subjects}
Weak Areas: ${weak}
Hours/Day: ${hours}

Day 1:
Morning: Study ${weak}
Evening: Revise ${subjects}

Day 2:
Morning: Practice problems
Evening: Concept revision

Day 3:
Morning: Deep focus on ${weak}
Evening: Mock test

Day 4:
Morning: Analyze mistakes
Evening: Light revision

Day 5:
Morning: Mixed practice
Evening: Important topics

Day 6:
Morning: Full syllabus test
Evening: Review mistakes

Day 7:
Morning: Quick revision
Evening: Rest
`;

  document.getElementById("output").innerText = plan;
}