import { SubjectPage } from "../_components/subject-page";
import { caseStudies } from "../_data/subjects";

export default function Page() {
  return <SubjectPage subject={caseStudies} />;
}
