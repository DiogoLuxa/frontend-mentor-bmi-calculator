import iconEating from "../images/icon-eating.svg";
import iconExercise from "../images/icon-exercise.svg";
import iconSleep from "../images/icon-sleep.svg";
import iconGender from "../images/icon-gender.svg";
import iconAge from "../images/icon-age.svg";
import iconMuscle from "../images/icon-muscle.svg";
import iconPregancy from "../images/icon-pregnancy.svg";
import iconRace from "../images/icon-race.svg";

const CardDatas = [
  {
    name: "iconEating",
    src: { iconEating },
    title: "Healthy eating",
    description:
      "Healthy eating promotes weight control, disease prevention better digestion, immunity, mental clarity, and mood.",
  },
  {
    name: "iconExercise",
    src: { iconExercise },
    title: "Regular exercise",
    description:
      "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.",
  },
  {
    name: "iconSleep",
    src: { iconSleep },
    title: "Adequate sleep",
    description:
      "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.",
  },
];

const CardDatasLimitations = [
  {
    name: "iconGender",
    src: { iconGender },
    title: "Gender",
    description:
      "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.",
  },
  {
    name: "iconAge",
    src: { iconAge },
    title: "Age",
    description:
      "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.",
  },
  {
    name: "iconMuscle",
    src: { iconMuscle },
    title: "Muscle",
    description:
      "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.",
  },
  {
    name: "iconPregancy",
    src: { iconPregancy },
    title: "Pregnancy",
    description:
      "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.",
  },
  {
    name: "iconRace",
    src: { iconRace },
    title: "Race",
    description:
      "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.",
  },
];
export { CardDatas, CardDatasLimitations };
