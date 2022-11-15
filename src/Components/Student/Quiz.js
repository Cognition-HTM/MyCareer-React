import React, { useEffect, useState } from "react";
import Progressbar from "./Progressbar";
import Radiogroup from "./Radiogroup";

export default function Quiz() {
  const plans = [
    [
      {
        name: "Music",
        level: 1,
      },
      {
        name: "Art",
        level: 2,
      },
      {
        name: "Psychology",
        level: 3,
      },
      {
        name: "Reading",
        level: 4,
      },
      {
        name: "Zoology",
        level: 5,
      },
      {
        name: "Speech and Debate",
        level: 6,
      },
      {
        name: "Sports and Dance",
        level: 7,
      },
      {
        name: "Mathematics",
        level: 8,
      },
      {
        name: "I didn't like school",
        level: 9,
      },
    ],
    [
      {
        name: "Spend time alone",
        level: 9,
      },
      {
        name: "Read",
        level: 4,
      },
      {
        name: "Go to parties",
        level: 3,
      },
      {
        name: "Participate in sports",
        level: 7,
      },
      {
        name: "Listen to music",
        level: 1,
      },
      {
        name: "Camp, hike or garden",
        level: 5,
      },
      {
        name: "Draw and paint",
        level: 2,
      },
      {
        name: "Solve Math equations",
        level: 8,
      },
      {
        name: "Read self help books",
        level: 6,
      },
    ],
    [
      {
        name: "Sports broadcasts",
        level: 7,
      },
      {
        name: "Documentaries",
        level: 4,
      },
      {
        name: "Musicals",
        level: 1,
      },
      {
        name: "Science programs",
        level: 8,
      },
      {
        name: "Nature programs",
        level: 5,
      },
      {
        name: "Design and style programs",
        level: 2,
      },
      {
        name: "Adaptations of classic books",
        level: 6,
      },
      {
        name: "Talk shows",
        level: 3,
      },
      {
        name: "Social commentary documentaries",
        level: 9,
      },
    ],
    [
      {
        name: "Go to an art museum",
        level: 2,
      },
      {
        name: "Review your household",
        level: 4,
      },
      {
        name: "Enjoy a quiet day all to yourself",
        level: 9,
      },
      {
        name: "Hang out with your friends at all the mall",
        level: 3,
      },
      {
        name: "Attend a local concert",
        level: 1,
      },
      {
        name: "Invite your friends out for a game of soccer",
        level: 7,
      },
      {
        name: "Head to the nearest trail for a day hike",
        level: 5,
      },
      {
        name: "Curl up with a good book",
        level: 8,
      },
      {
        name: "Journal and mediate",
        level: 6,
      },
    ],
    [
      {
        name: "Reading article that are related to your topic",
        level: 8,
      },
      {
        name: "Reflecting on the project quietly by yourself",
        level: 9,
      },
      {
        name: "Creating a chart listing different alternatives and assigning each a score based on various factors",
        level: 6,
      },
      {
        name: "Working in your garden",
        level: 5,
      },
      {
        name: "Going for a jog through the neighborhood",
        level: 7,
      },
      {
        name: "Discussing your options with other people",
        level: 3,
      },
      {
        name: "Making a mind map exploring your different options",
        level: 2,
      },
      {
        name: "Listening to your favorite songs",
        level: 1,
      },
      {
        name: "Rereading classics and finding inspiration in history",
        level: 4,
      },
    ],
    [
      {
        name: "Challenge someone to a game of darts",
        level: 7,
      },
      {
        name: "Chat with as many people as possible",
        level: 9,
      },
      {
        name: "Spending the evening calculating how much the party cost",
        level: 8,
      },
      {
        name: "Keep to yourself and observe other people",
        level: 3,
      },
      {
        name: "Notice the architecture of the host's home",
        level: 2,
      },
      {
        name: "Takes a stroll through the host's garden",
        level: 5,
      },
      {
        name: "Get into a discussion about your favourite author",
        level: 6,
      },
      {
        name: "Browse through the host's music collection",
        level: 1,
      },
      {
        name: "Wax philosophical to other guests",
        level: 4,
      },
    ],
    [
      {
        name: "Solving riddles",
        level: 2,
      },
      {
        name: "Physical tasks such as tossing a ball into a basket",
        level: 7,
      },
      {
        name: "Leading a group",
        level: 3,
      },
      {
        name: "Drawing clues to help team members guess the answer",
        level: 9,
      },
      {
        name: "Identifying plants and animals",
        level: 5,
      },
      {
        name: "Math questions",
        level: 8,
      },
      {
        name: "Remember song lyrics",
        level: 1,
      },
      {
        name: "Identifying who said as a famous quotation",
        level: 6,
      },
      {
        name: "Looking into my crystal ball",
        level: 4,
      },
    ],
    [
      {
        name: "Sorting concepts into different categories to make them easier to remember",
        level: 2,
      },
      {
        name: "Get together with classmates to study group sessions",
        level: 3,
      },
      {
        name: "Try to gain hands on experience",
        level: 7,
      },
      {
        name: "Focus on understanding the reasoning and logic behind the material",
        level: 8,
      },
      {
        name: "Make up to help memorize different concepts",
        level: 1,
      },
      {
        name: "Read over your notes and assigned readings",
        level: 6,
      },
      {
        name: "Read the material outside the park",
        level: 5,
      },
      {
        name: "Lock yourself in the room to study quietly with no distractions",
        level: 9,
      },
      {
        name: "Try to get the general gist of the materials and wing it",
        level: 4,
      },
    ],
  ];
  const ques = [
    "What was your favorite subject in school? ",
    "During your free time, you like to:",
    "Which type of television programs do you usually watch?",
    "It's your day off and it happens to be a beautiful summer day. You are most likely tO",
    "When you are trying to come up with ideas for a new project, you are most likely to find inspiration by:",
    "At a party, you're most likely to:",
    "You're trying to choose a board game to play with friends. Which of the following activities would you excel at most?",
    "You have a big test tomorrow and need to review the material. What study method do you use?",
  ];
  const prbarstatus = [
    { name: "Step 1", href: "#", status: "current" },
    { name: "Step 2", href: "#", status: "upcoming" },
    { name: "Step 3", href: "#", status: "upcoming" },
    { name: "Step 4", href: "#", status: "upcoming" },
    { name: "Step 5", href: "#", status: "upcoming" },
    { name: "Step 6", href: "#", status: "upcoming" },
    { name: "Step 7", href: "#", status: "upcoming" },
    { name: "Step 8", href: "#", status: "upcoming" },
  ];
  const [qval, setqval] = useState(ques[0]);
  const [prbarval, setPrbarval] = useState(prbarstatus);
  const [output, setoutput] = useState([]);
  const updateprbar = (qindex) => {
    console.log("prbarqindex is" + qindex);
    for (let i = 0; i < qindex; i++) {
      prbarstatus[i].status = "complete";
    }
    prbarstatus[qindex].status = "current";
  };

  const [opts, setOpts] = useState(plans[0]);
  const [ram, setRam] = useState();
  const [qindex, setQindex] = useState(0);
  const handlesubmit = (level) => {
    setRam(level);
    if (level != null) {
      setoutput((current) => [...current, level]);
      setQindex(qindex + 1);
    }
  };
  useEffect(() => {
    console.log(ram);
    updateprbar(qindex);
    setPrbarval(prbarstatus);
    setqval(ques[qindex]);
    setOpts(plans[qindex]);
    console.log(output);
    console.log(prbarstatus);
  }, [ram]);

  return (
    <div>
      <div className="progressbar w-full flex justify-center pb-10 pt-10">
        <Progressbar status={prbarval} />
      </div>
      <div className="question w-full px-4 pt-5">
        <div className="questiontext mx-auto w-full max-w-md px-2 lg:font-bold lg:text-xl text-center">
          {qval}
        </div>
      </div>
      <Radiogroup plans={opts} setRam={handlesubmit} qindex={qindex} />
    </div>
  );
}
