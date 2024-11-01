import "../styles/Tab.css";
import type { PropsOfReview, ReviewProps, WelcomeProps } from "../types";
import Reviews from "./Reviews";

export default function ({review} :PropsOfReview) {
  const filteredArray = review.filter(
    (element: ReviewProps) => element.category === "DATA"
  );

  return (
    <>
      <div className="course">
        <h1 className="titre">Data Analyste</h1>
        <img
          className="image"
          src="https://cdn.prod.website-files.com/62233c592d2a1e009d42f46c/6634fa6e1db667aa7076d415_653a22875a20f8270166937d_63f5e3870c7141312c78cf64_meilleures-formations-apprendre-analysis-p-1080.webp"
          alt=""
        />

        <p className="course-description">
          Grâce à notre{" "}
          <strong>
            pédagogie par la pratique et au coaching de nos formateurs experts
            et passionnés
          </strong>
          , vous montez rapidement en compétences sur des problématiques
          concrètes. Vous bénéficierez aussi de notre plateforme de cours en
          ligne et d'un accès à son contenu à vie pour progresser même une fois
          votre formation terminée !{" "}
        </p>
        <a
          className="course-link"
          href="http://formation.datascientest.com/data-engineer-landing-page?utm_term=formation%20data%20engineering&utm_campaign=%5Bsearch%5D+data+engineer&utm_source=adwords&utm_medium=ppc&hsa_acc=9618047041&hsa_cam=15622925471&hsa_grp=132538100818&hsa_ad=660469292859&hsa_src=g&hsa_tgt=kwd-1273040409783&hsa_kw=formation%20data%20engineering&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gad_source=1&gbraid=0AAAAACo3KhPzVh9sCmmUmwq6_vLH6Fgeb&gclid=Cj0KCQjw7Py4BhCbARIsAMMx-_KRowN_M67_mrysXcqNUZAZY5C9zO2uMk8B-VpvRAwzkIW9qoD8yYYaAkS5EALw_wcB"
        >
          Lien vers la formation
        </a>
      </div>
      <section className="tab">
        <h1>Les Avis</h1>
        {filteredArray.map((element: ReviewProps) => (
          <Reviews
            title={element.title}
            description={element.description}
            key={element.id}
          />
        ))}
      </section>
    </>
  );
}
