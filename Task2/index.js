import express from "express"
import dotenv from "dotenv"
import { connectmongo } from "./db/db.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

let gdgInfo = "GDG, or Google Developer Groups, are community-driven organizations that bring together developers, tech enthusiasts, and professionals to share knowledge, network, and collaborate on various Google technologies. Each GDG chapter hosts events such as meetups, workshops, and hackathons, fostering an inclusive environment for learning and innovation. Participants have the opportunity to engage with experts, work on projects, and stay updated on the latest trends in software development. By promoting open-source initiatives and encouraging collaboration, GDGs play a vital role in building vibrant tech communities around the world."
let mmduInfo = "MM(DU) Mullana, also known as Maharishi Markandeshwar University, is a prominent educational institution located in Mullana, Haryana, India. Established in 1993, the university is known for its focus on holistic education and comprehensive development. It offers a diverse range of undergraduate, postgraduate, and doctoral programs across various disciplines, including engineering, management, pharmacy, and health sciences. With a commitment to research and innovation, M.M. Mullana emphasizes experiential learning and industry collaboration, equipping students with the skills necessary for a competitive job market. The campus is well-equipped with modern facilities and a vibrant student community, fostering an environment conducive to academic and personal growth."


app.listen(PORT, () => {
    console.log(`Server starting at Port: ${PORT}`);
})

connectmongo();

app.get("/", (req,res) => {
    res.send("Hello")
})

app.get("/gdg", (req,res) => {
    res.send(gdgInfo)
})

app.get("/mmdu", (req,res) => {
    res.send(mmduInfo)
})

app.get("/bye", (req,res) => {
    res.send("Bye bye")
})
