## A/B Testing

### A/B Test Name:
NPS Score Enhancement through UI Redesign

### User Story Number:
US002

### Metric (from the HEART grid):
Net Promoter Score (NPS)

### Hypothesis:
We believe that the current placement and design of our NPS survey are leading to low response rates and potentially lower scores. By redesigning the user interface to make the NPS survey more engaging and accessible post-interaction, we expect to see an increase in response rates and overall NPS.

### Experiment:
- **Audience**: All users post-interaction, with 50% exposed to the current NPS survey (control) and 50% exposed to the redesigned NPS survey (variant).
- **Duration**: 3 weeks to gather enough data to analyze.
- **Success Metrics**: Increase in NPS response rate and an improvement in the overall NPS score.
- **Tracking Setup**: Utilize Firebase Analytics to track the number of survey prompts shown, the number of responses received, and the respective scores. Compare these between the control and variant groups.

### Variations:
- **Control Version**: The current NPS survey design and placement.
- **Test Version**: A redesigned NPS survey with improved visibility and user engagement features, such as an interactive slider for rating, more colorful design, and a motivational message post-completion.
