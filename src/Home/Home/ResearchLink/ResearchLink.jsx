import { Slide } from "react-awesome-reveal";


const ResearchLink = () => {
    return (
        <Slide direction="up">
            <div className="text-center my-12 w-full">
            <h1 className="my-8 text-[#187E89] text-4xl font-bold">Student Research Paper Link</h1>

            <a  className="btn-link text-blue-600 text-sm italic" href="https://www.researchgate.net/publication/235272662_The_relationship_between_grades_and_career_success">https://www.researchgate.net/publication/</a>
            <br />
            <a  className="btn-link text-blue-600 text-sm italic" href="https://www.nature.com/articles/s41539-019-0055-z">https://www.nature.com/articles/s41539</a>
            <br />
            <a  className="btn-link text-blue-600 text-sm italic" href="https://www.studocu.com/ph/document/university-of-st-la-salle/general-education/the-impacts-of-social-media-usage-on-students-mental-health-group-1/33677614">https://www.studocu.com/ph/document/university</a>

            
        </div>
        </Slide>
    );
};

export default ResearchLink;