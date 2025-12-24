'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BlogPost() {
  const t = useTranslations('blog.posts.subordination-performance-outils-travail');

  return (
    <>
      {/* Header */}
      <article className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="container mx-auto max-w-3xl">
          {/* Back button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-cohortes-orange transition-colors mb-8"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour au blog
          </Link>

          {/* Metadata */}
          <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
            <span className="px-3 py-1 bg-cohortes-orange/10 text-cohortes-orange rounded-full font-semibold">
              QVCT
            </span>
            <time>20 juin 2024</time>
            <span>·</span>
            <span>8 min de lecture</span>
          </div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-cohortes-dark mb-8 leading-tight"
          >
            {t('title')}
          </motion.h1>

          {/* Content placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-xl max-w-none [&_a]:text-blue-600 [&_a]:underline [&>p]:mb-8 [&_p]:text-lg [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:mt-12 [&_h2]:mb-6 [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-4"
          >
            <p>
              <a href="https://adconseil.org/le-blog-qvt-comment-les-outils-dorganisation-du-travail-inscrivent-la-subordination-des-conditions-de-travail-a-la-performance/">[ARTICLE – Semaine QVCT 2024]</a>  "L’entreprise se dote d’outils d’organisation pour mener à bien la performance". C’est l’un des discours utilisé pour justifier la présence des outils d’organisation du travail en entreprise. Sans eux, l’organisation serait chaotique, la gestion impossible et la performance impactée. L’absence d’outil symboliserait l’absence d’organisation.
            </p>

            <p>
              L’adoption des outils d’organisation (outils de gestion, communication en entreprise) continue de croître. La pandémie de COVID-19 et le télétravail ont marqué un tournant majeur dans le développement de la transformation numérique des entreprises, entraînant une augmentation significative de l’utilisation des outils.

            </p>
            <p>
              Toutefois, la manière dont un outil est conçu influence la façon dont il est utilisé, et par conséquent, la manière dont l’organisation se structure.
            </p>

            <p>
              Comme ils sont conçus pour l’entreprise, les outils doivent répondre à ses attentes et exigences. Plus précisément, derrière l’entreprise, ils s’adressent au top-management. Ce qui est attendu d’un outil de gestion de projet, c’est d’avoir une vue synthétique et globale de la performance de l’activité.

            </p>

            <p>
              Les outils d’organisation promettent à l’entreprise de "maintenir les objectifs clairs", "planifier et diviser le travail pour mieux le gérer", "suivre les KPIs liés à la performance" et "accélérer le travail" (1). La finalité est claire, il faut produire !

            </p>

            <blockquote className="border-l-4 border-gray-300 pl-4 italic my-8">
              Phrase d’accroche d’un outil de gestion de projet : Maintenez une vue claire des objectifs et maximisez l’impact de votre travail à grande échelle en reliant vos tâches et les processus aux objectifs de l’entreprise.
            </blockquote>
            <h2>
              I. La gestion des rôles comme reflet de la subordination
            </h2>

            <p>
              Tous les utilisateurs des outils d’organisation, principalement de gestion, ne sont pas logés à la même enseigne. Chaque utilisateur se voit attribuer un ou plusieurs rôles (2), et chaque rôle détermine ce qu’il est autorisé à voir et à faire sur la plateforme. Ces rôles peuvent être classés en deux catégories : ceux dédiés au reporting et ceux spécialisés dans l’analyse des données collectées. Très souvent, les rôles reflètent l’organigramme de l’entreprise, et donc la subordination

            </p>
            <p>
              Dans une hiérarchie, les rôles situés au sommet de la pyramide ont accès à des fonctionnalités stratégiques, leur permettant une compréhension globale et une vue synthétique des données, qui sont agrégées et analysées. En revanche, à la base de la pyramide, ceux qui réalisent le travail ont accès par leur rôle à des fonctionnalités surtout de reporting : consigner l’avancée des tâches de manière nominative et encadrée. Les fonctionnalités stratégiques y sont bien moins fréquentes (3). La mesure de la performance est faite avec les données issues du reporting.
            </p>

            <p>
              Toutes les fonctionnalités de reporting sont individualisées. Il est possible de connaître pour chaque utilisateur les tâches qui lui ont été attribuées, celles qui sont terminées, et le rythme auquel elles ont été réalisées. Les données permettent de construire des matrices de compétence, indiquant quelles compétences sont maîtrisées par chacun. En conclusion, on sait qui "performe" et sur quel aspect.
            </p>
            <p>

              Pour suivre « objectivement » la performance, il faut obtenir des métriques quantifiables, qui permettent ensuite de la mesurer et la comparer. Pour les obtenir, les données sont analysées et converties en graphiques, camemberts, voire parfois en notes individuelles. Par la suite, on a une vision par projet et équipe, principalement pour évaluer la performance collective. La mise en commun des données des multiples outils permet une connaissance dite approfondie, où l’on obtient une donnée toujours plus complète sur le travail reporté.
            </p>

            <p>
              Le travail est alors transformé, sa valeur semble moins dans son exécution que dans son reporting. On mesure le travail à la quantité d’informations saisies. Ceux qui reportent leur travail, alimentent la plateforme pour répondre aux utilisateurs stratégiques : ce sont bien eux qui tirent de la valeur de ces logiciels.
            </p>

            <p>
              Cette transformation impacte la qualité du travail : puisque la mesure de la performance est indexée sur la quantité de tâches réalisées, elle peut être détournée et maximisée. Dans le pire cas, s’organiser revient gérer des tâches et les placer dans les bonnes cases. Les conditions des logiciels débordent sur celles des utilisateurs. Cette dérive est préoccupante, car ceux qui rapportent leur travail peuvent devenir de simples exécutants. Or dans la réalité, le travail prescrit et reporté n’est qu’une partie du travail réel, nécessaire pour la bonne réalisation du travail.
            </p>

            <p>
              S’agit-il vraiment d’outils de gestion ou d’outils de suivi de performance ? Certains rappellent plutôt des pointeuses modernes. Comment ces outils impactent-ils les relations humaines, et donc les conditions de travail collectives ?
            </p>

            <h2>
              II. L’impact des outils d’organisation sur les utilisateurs et leurs conditions
            </h2>

            <p>
              La mesure de la performance, à travers les outils de gestion, permettrait au top management d’avoir une météo de l’organisation, de mieux comprendre les réalités du terrain et, grâce à l’ensemble de ces informations, d’assurer un meilleur pilotage.
            </p>

            <p>
              Le nerf de l’organisation, c’est l’information. Mais une information structurée, imposée, qui a uniquement de la valeur pour les utilisateurs stratégiques.
            </p>
            <p>

              Depuis la pandémie de COVID-19 et l’augmentation du télétravail, la multiplication des outils de gestion et de communication a radicalement changé les interactions entre collègues. Consigner les tâches dans un logiciel et assurer leur transparence est désormais considéré comme essentiel pour l’organisation, mais cette exigence s’applique principalement aux opérationnels, en bas de la pyramide des rôles, dont l’accès aux fonctionnalités est limité.
            </p>

            <p>
              Les objectifs, entretiens, formations, représentations et évaluations, accentués par l’usage de ces outils, deviennent de plus en plus individualisés. La surveillance entre pairs, la désolidarisation (4) et les silos ne peuvent qu’augmenter. La représentation collective des conditions de travail n’émerge pas, laissant place à une focalisation exclusive sur la performance individuelle. La définition de cette performance échappe à ceux qui sont mesurés, étant dictée par les logiques stratégiques et encadrée par les outils en place.
            </p>

            <p>
              Bien que le travail existe en dehors de ces outils, il n’est pas mesuré et, par conséquent, rarement reconnu. Une grande partie du travail et de ses conditions restent invisibles, non pris en compte dans les rapports, l’absence de reconnaissance et de considération peut entraîner une augmentation des risques psychosociaux. Un travail n’est reconnu comme réalisé que lorsqu’il existe sur les plateformes, pour le bien de la mesure de la performance.
            </p>

            <p>
              Les ressources et soutiens sont perçus comme insuffisants par rapport aux exigences imposées (5). Il n’existe par exemple aucune mention ou fonctionnalité autour des conditions du travail. Il faut alors un autre logiciel, encore un, encore du reporting, en dehors des logiques organisationnelles. Le manque de communs renforce encore plus la solitude face au logiciel. La pyramide des rôles désensibilise la compréhension des besoins et contraintes inter-personnes et inter-équipes.
            </p>

            <p>
              Les conditions de travail et d’organisation affectent à la fois la performance de l’entreprise et les relations entre les employés. L’écart de vision entre les équipes stratégiques et opérationnelles ne fait que se creuser, tandis que la définition de la performance, imposée et peu discutée, reste figée. Le statu quo est maintenu par l’usage des outils, qui augmentent la compétition interne. La représentation de la division du travail dans les outils de gestion conduit à une déshumanisation des échanges dans les équipes.
            </p>

            <h2>
              Conclusion
            </h2>

            <p>
              Peu de secteurs d’activité ont des moments collectifs dédiés à la discussion de l’organisation et des conditions de travail. Si la pratique détermine l’usage, de nombreux outils d’organisation sont conçus pour répondre aux besoins du top management. Les autres utilisateurs, qui voient leur travail transformé pour correspondre à des cases préétablies, y trouvent peu de valeur. La division au sein de l’entreprise permet de mieux gouverner, mais elle se fait au détriment des conditions de travail.
            </p>

            <p>
              Les outils d’organisation ont probablement contribué à rendre les entreprises d’aujourd’hui plus individualisées qu’elles ne l’ont jamais été et à accentuer l’absence de prise en compte des conditions de travail, au nom de la performance.
            </p>

            <p>
              Mais les solutions sont déjà là. L’étude “Qualité de Vie et Conditions de Travail” (6) montre que les entreprises qui engagent des politiques de QVCT ont un impact positif sur la performance et le dialogue social.
            </p>

            <p>
              Et si la pratique détermine l’usage, il faut avoir des outils alternatifs qui prennent en considération une autre définition de la performance et qui donnent une place aux conditions de travail. Auto-gestion, organisation libertaire, holacratie, il existe des tonnes d’alternatives pour ouvrir l'imaginaire (7) organisationnel. Afin de répondre aux défis d’aujourd’hui et de demain, il va falloir changer d’outil et de mesure.
            </p>
            <p>
              Auteur : <a href="https://www.linkedin.com/in/roberto-barros-de-sousa-16635665/">
                Roberto Barros De Sousa
              </a>
            </p>

            <h3>
              Références:
            </h3>

            <ol className="list-decimal pl-6 mb-8 text-lg">
              <li>Extraits tirés de plusieurs outils d’organisation, trello, asana, confluence</li>
              <li>Rôle: mécanisme de contrôle d’accès qui définit les autorisations de chaque utilisateur dans un logiciel.</li>
              <li>51% salariés français déclarent toujours ou souvent être consultés et 52% qui peuvent influencer les décisions importantes pour leur travail, <a href="https://www.alternatives-economiques.fr/dix-graphiques-comprendre-lampleur-de-crise-travail-france/00106665">https://www.alternatives-economiques.fr/dix-graphiques-comprendre-lampleur-de-crise-travail-france/00106665</a></li>
              <li>Seuls 36% de salariés français considèrent que leurs collègues les aident et les soutiennent toujours (46% dans l’europe des 27) <a href="https://www.alternatives-economiques.fr/dix-graphiques-comprendre-lampleur-de-crise-travail-france/00106665">https://www.alternatives-economiques.fr/dix-graphiques-comprendre-lampleur-de-crise-travail-france/00106665</a></li>
              <li>39% de salariés français se déclarant en situation d’emploi “tendu”, <a href="https://www.alternatives-economiques.fr/dix-graphiques-comprendre-lampleur-de-crise-travail-france/00106665">https://www.alternatives-economiques.fr/dix-graphiques-comprendre-lampleur-de-crise-travail-france/00106665</a></li>
              <li>“Qualité de Vie et Conditions de Travail” réalisé par Qualisocial en partenariat avec Ipsos. <a href="https://www.qualisocial.com/barometre-qvct-qualisocial-ipsos-2024/">https://www.qualisocial.com/barometre-qvct-qualisocial-ipsos-2024/</a></li>
              <li>Xerfi Canal: Repenser le management : Science-fiction, féminisme et anarchisme [Léa Dorion], h<a href="https://www.youtube.com/watch?v=UvCWOMUA19g&ab_channel=XerfiCana">ttps://www.youtube.com/watch?v=UvCWOMUA19g&ab_channel=XerfiCana</a></li>
            </ol>

          </motion.div>
        </div>
      </article>
    </>
  );
}
