// static content for board members. I could also have this set up dynamically, but that may be a future implementation
import type { NextPage } from "next";

import BoardMembers from "../components/BoardMembers";
import BrandonHammond from "/public/BoardMemberPhotos/brandon-hammond.jpg";
import BrotherDallas from "/public/BoardMemberPhotos/brother-dallas-wilson.jpg";
import CassandraParker from "/public/BoardMemberPhotos/cassandra-parker.jpg";
import CindyCrook from "/public/BoardMemberPhotos/cindy-crook.jpg";
import EvelynDelainHart from "/public/BoardMemberPhotos/Evelyn-Delain-hart-website.jpg";
import JacintaBryant from "/public/BoardMemberPhotos/jacinta-bryant.jpg";
import JaniceMalone from "/public/BoardMemberPhotos/janice-malone.jpg";
import JanieWilson from "/public/BoardMemberPhotos/jdwilson21.jpg";
import JeanHamilton from "/public/BoardMemberPhotos/jean-hamilton.jpg";
import JohnFlaugher from "/public/BoardMemberPhotos/john-flaugher.jpg";
import KevinGadsden from "/public/BoardMemberPhotos/kevin-gadsden.jpg";
import MatthewWJeffcoat from "/public/BoardMemberPhotos/matthew-w-jeffcoa.jpg";
import DorianNixon from "/public/BoardMemberPhotos/sam.jpg";
import SharonGoss from "/public/BoardMemberPhotos/sharon-goss.jpg";
import SherlineLawson from "/public/BoardMemberPhotos/sherline-lawson.jpg";
import TuttiBeasley from "/public/BoardMemberPhotos/tutti-beasley.jpg";
import BenPatton from "/public/BoardMemberPhotos/ben_patton.jpeg";
import AboutLayout from "../components/Layouts/AboutLayout";

const data = [
  {
    name: "Dr. Janie D. Wilson",
    photo: JanieWilson,
    altText: "Dr. Janie D. Wilson", // altText from the CMS will just be the board members name
    role: "PBCM Presiden & Founder",
    category: "board_member",
  },
  {
    name: "Mrs. Janice Malone",
    photo: JaniceMalone,
    altText: "Mrs. Janice Malone",
    role: "PBCM 1st Vice Chair",
    category: "board_member",
  },
  {
    name: "Ms. Jean Hamilton",
    photo: JeanHamilton,
    altText: "Ms. Jean Hamilton",
    role: "PBCM Chaplain",
    category: "board_member",
  },
  {
    name: "Mrs. Cassandra Parker",
    photo: CassandraParker,
    altText: "Mrs. Cassandra Parker",
    role: "PBCM Corporate Treasurer",
    category: "board_member",
  },
  {
    name: "Mrs. Cindy Crook",
    photo: CindyCrook,
    altText: "Mrs. Cindy Crook",
    role: "PBCM Board Member",
    category: "board_member",
  },
  {
    name: "Mr. Matthew W. Jeffcoat",
    photo: MatthewWJeffcoat,
    altText: "Mr. Matthew W. Jeffcoat",
    role: "PBCM Board Member",
    category: "board_member",
  },
  {
    name: "Mr. Brandon Hammond",
    photo: BrandonHammond,
    altText: "Brandon Hammond",
    role: "PBCM Board Member",
    category: "board_member",
  },
  {
    name: "Dr. Evelyn DeLaine Hart",
    photo: EvelynDelainHart,
    altText: "Dr. Evelyn DeLaine Hart",
    role: "PBCM Board Member",
    category: "board_member",
  },
  {
    name: "Mr. John Flaugher",
    photo: JohnFlaugher,
    altText: "Mr. John Flaugher",
    role: "PBCM Board Member",
    category: "board_member",
  },
  {
    name: "Mrs. Tutti Beasley",
    photo: TuttiBeasley,
    altText: "Mrs. Tutti Beasley",
    role: "PBCM Board Member",
    category: "board_member",
  },
  {
    name: "Dr. Jacinta Bryant",
    photo: JacintaBryant,
    altText: "Dr. Jacinta Bryant",
    role: "PBCM Board Member",
    category: "board_member",
  },
  {
    name: "Rev. Dr. Dallas H. Wilson Jr.",
    photo: BrotherDallas,
    altText: "Rev. Dr. Dallas H. Wilson Jr.",
    role: "PBCM Board Member",
    category: "board_member",
  },
  {
    name: "Rev. George McCray",
    role: "PBCM Board Member",
  },
  {
    name: "Mrs. Holly Watts",
    role: "PBCM Board Member",
  },
  {
    name: "Mr. Calvin Malone",
    role: "PBCM Board Member",
  },
  {
    name: "Mrs. Judy Trotter",
    role: "PBCM Board Member",
  },
  {
    name: "Dr. Keilya Pringle",
    role: "PBCM Board Member",
  },
];

const coordinators = [
  {
    name: "Mrs. Sherline Lawson",
    photo: SherlineLawson,
    altText: "Mrs. Sherline Lawson",
    role: "PBCM Accountant",
    category: "coordinator",
  },
  {
    name: "Mrs Dorian Nixon",
    photo: DorianNixon,
    altText: "Mrs. Dorian Nixon",
    role: "PBCM Ministry Coordinator",
    category: "coordinator",
  },
  {
    name: "Mr. Ben Patton",
    photo: BenPatton,
    altText: "Mr. Ben Patton",
    role: "Technical Advisor / Website Coordinator",
    category: "coordinator",
  },
];

const Board: NextPage = () => {
  return (
    <AboutLayout>
      <BoardMembers data={data} coordinators={coordinators} />
    </AboutLayout>
  );
};

export default Board;
