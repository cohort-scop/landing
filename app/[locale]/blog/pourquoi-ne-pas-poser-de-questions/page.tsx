'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BlogPost() {
  const t = useTranslations('blog.posts.pourquoi-ne-pas-poser-de-questions');

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
              Méthodologie
            </span>
            <time>23 septembre 2024</time>
            <span>·</span>
            <span>5 min de lecture</span>
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
              Commençons par un petit quiz. Trouvez le point commun entre ces choses fort différentes :
            </p>

            <ol className="list-decimal pl-6 mb-8 text-lg">
              <li>Remplir un formulaire de la CAF ou des impôts</li>
              <li>Répondre à enquête de satisfaction reçue après l'achat d'un produit ou d'un service</li>
              <li>Passer un test des 16 personnalités (mais si vous connaissez, les ENFP/ JT tout ça tout ça)</li>
              <li>Répondre à un sondage</li>
            </ol>

            <p>
              Réponse : <span className="font-bold">toutes ces démarches impliquent de répondre à un questionnaire.</span>
            </p>


            <h2>
              Un questionnaire, au fond, qu’est-ce que c’est ?
            </h2>

            <p>
              La question peut paraître étrange, mais laissez-vous surprendre, un petit instant, par la fréquence d'une démarche qui est aujourd'hui entrée dans les mœurs. La réception d'une énième enquête de satisfaction dans nos boîtes mail agace un peu, mais nous ne nous en étonnons plus et nous y répondons souvent, parfois sans même y penser.
            </p>

            <p>
              Apparu au début du 20e siècle en tant qu'outil de recherche développé par et pour les sciences sociales, la <a href="https://shs.cairn.info/l-enquete-sociologique--9782130608738-page-93?lang=fr">pratique universitaire du questionnaire </a> fait pourtant toujours l'objet de nombreux <a href="https://www.pedagogie.ac-aix-marseille.fr/upload/docs/application/pdf/2019-04/part-1_methodologie-questionnaire.pdf">débats et fiches pratiques,</a> des cours entiers à la fac peuvent y être consacrés et les méthodes employées pour obtenir des réponses les plus fiables et utiles possibles sont toujours affinées.
            </p>
            <p>

              Des questions, à sa création, il en soulève au moins autant qu’il en pose : à quoi sert-il, au fond ? Quel discours l’habille ? Pourquoi un questionnaire ? Est-il anonyme ? Les questions sont-elles les mêmes pour tout le monde ? Sont-elles orientées ? Est-il possible qu’elles ne le soient pas ? Comment ceux à qui il est destiné sont-ils incités à y répondre ? Ont-ils la possibilité de ne pas y répondre ? Les résultats en sont-ils publiés ? Etc…
            </p>

            <p>
              Comment trouver une grille de lecture de l'objet « questionnaire » ? Non pas une sorte de « guideline » de ce qui serait le « bon » « questionnaire d'entreprise », il s'en trouve de toutes sortes, mais plutôt des pistes pour construire un outil de réflexion sur le dispositif lui-même.
            </p>

            <p>
              J'ai écouté, par hasard, du moins en ne pensant pas du tout à ces questions-là, une série de cours d'anthropologie autour du thème <a href="https://www.youtube.com/playlist?list=PLID1ompbJIzRxtQn5ZhiZp6ZS-Ui92Csz">"Solidarité et violence"</a> dispensés en 2016 à la Sorbonne par Alexandre Duclos, enseignant-chercheur, dont la captation est disponible sur YouTube. Si ce n'est pas notre sujet, une parenthèse qu'il fait durant l'un de ses cours nous ouvre des portes pour penser l'objet questionnaire.
            </p>

            <h2>
              Un questionnaire n’est pas une pratique objective
            </h2>

            <p>
              Dans le <a href="https://www.youtube.com/watch?v=WYOaes0KuIE&list=PLID1ompbJIzRxtQn5ZhiZp6ZS-Ui92Csz&index=6&t=5324s">sixième cours,</a> portant sur la mafia, il est fait référence à un article paru en 2001 dans le 31e volume de la revue d'Ethnologie française (p.61 à 67) intitulé <a href="https://shs.cairn.info/revue-ethnologie-francaise-2001-1-page-61?lang=fr">La mafia d'un village sicilien.</a> Il y est question des difficultés rencontrées par Anton Block, anthropologue, pour questionner des gens dans un tel contexte :
            </p>

            <blockquote className="border-l-4 border-gray-300 pl-4 italic my-8">
              « En posant des questions, vous pouvez, très facilement et sans le vouloir, introduire et imposer vos propres catégories sur les individus dont vous voulez précisément cerner les catégories propres. Ceci irait au-delà de la raison de votre présence : comprendre ces personnes dans leurs propres termes, découvrir leur vision du monde. »
            </blockquote>

            <p>
              Anton Block cherche entre autres choses à savoir comment est perçue la mafia par ses membres, s'ils en parlent librement ou non, à qui, comment, en utilisant quels termes. Chose impossible s'il arrive avec une série de questions pré-définie.
            </p>

            <p className="font-semibold">
              L'idée est la suivante : en posant une question à quelqu'un, vous orientez la façon dont la personne va vous répondre. En langage corporate on appellerait cela un biais.
            </p>

            <p>
              Si la question se pose pour un anthropologue, il semble alors logique d’étendre le questionnement à tous les champs utilisant un objet pouvant s’apparenter au questionnaire, donc aussi aux formulaires rédigés par les départements de ressources humaines sur la qualité de vie au travail par exemple. Ou à un professionnel de santé lorsqu’il délivre ou certifie un formulaire visant à évaluer les risques psychosociaux (dans le jargon, RPS) en entreprise. Celui qui rédige le questionnaire fait partie de l’entreprise, ou il fait partie d’un cabinet de conseil, donc d’une autre entreprise qui a elle-même ses pratiques, ses valeurs, ses codes, il a déjà une pratique du métier, de ce qu’il attend du questionnaire, du phénomène qu’il souhaite observer, comme le mal-être au travail. Il doit pourtant tenter de se départir de ses préjugés et poser des questions les plus neutres possibles, ce afin d’obtenir des réponses qui reflètent véritablement ce que pense et ressent la personne dans ses propres termes, selon ses propres catégories.
            </p>

            <h2>
              Un questionnaire n'est pas une démarche impersonnelle
            </h2>

            <blockquote className="border-l-4 border-gray-300 pl-4 italic my-8">
              « En posant des questions, vous courez le risque d'instaurer une hiérarchie, c'est-à-dire de vous mettre dans une position supérieure. »
            </blockquote>

            <p>
              C'est un problème récurrent du chercheur, mais aussi du policier, du juge, de l'instructeur et même du manager ou du responsable ressources humaines. Comment obtenir des réponses sincères si la personne en face vous voit comme une figure d'autorité, à laquelle elle peut avoir envie de plaire ou de se confronter ? Si vous avez déjà eu une position hiérarchique vis-à-vis de quelqu'un vous le savez, ça modifie votre comportement, en tout cas il n'est pas facile que ça ne le modifie pas. C'est un vrai sujet lors de la diffusion d'un questionnaire : quel rapport la personne qui le reçoit a avec la personne, ou l'entité, qui l'a envoyé ? Même si le lien est diffus, que c'est la fonction RH de la boîte, la question demeure pertinente, parce que si ce lien influe sur autant d'aspects de notre vie, il serait illusoire de croire qu'il n'influe pas sur nos réponses à des questionnaires diffusés par des entreprises, fussent-ils anonymes et digitalisés. Même si l'on sait que nos réponses ne remonteront pas jusqu'à nous, il demeure vrai que nous avons, ou non, et à différents degrés, envie de leur faire plaisir. C'est humain.
            </p>

            <h2>
              Freins à l'engagement
            </h2>
            <h3>
              Ou des bonnes raisons de ne pas répondre lorsqu'on vous pose une question
            </h3>

            <p>
              Réunissant ce qui suit dans l'article mentionné précédemment, il est possible de délivrer ce que l'on pourrait appeler en entreprise les freins à l'engagement, c'est-à-dire ce qui peut pousser les gens à ne pas répondre, ou à ne pas répondre comme on le souhaiterait. Reprenons un constat fait par beaucoup de chercheurs en science sociale : hormis les grands bavards qui, comme moi, adorent raconter leur vie, en général, <a href="https://www.lexpress.fr/societe/les-questions-ahurissantes-de-l-enquete-de-l-insee_956405.html">les gens apprécient assez peu qu'on leur pose toute une série de questions.</a> On ne parle pas des potes à qui vous adorez vous confier en petit comité ou des clients avec lesquels il y a un vrai feeling qui vous fait prolonger le déjeuner en apéro. Non, de questions qui viennent de gens que vous ne connaissez pas plus que ça, sur des sujets qui peuvent relever de ce que vous considérez personnel, voire intime, pour un résultat dont vous ne voyez pas nécessairement l'intérêt pratique.
            </p>

            <h3>
              L'absence de réponse : taux de participation
            </h3>

            <p>
              Les gens peuvent tout simplement ne pas vous répondre, et c'est ce qu'on mesure par les taux de participation aux études pluri-annuelles diffusées par les départements des ressources humaines de la plupart des moyennes et grandes entreprises. Peut-être, et c'est une question que je laisse pour une prochaine fois, qu'il serait plus intéressant de se demander pourquoi quelqu'un n'a pas envie de répondre que de chercher à augmenter les taux de participation.
            </p>

            <h3>
              Les réponses orientées : biais de confirmation ou mimétisme ?
            </h3>

            <p>
              Ils peuvent aussi vous dire, même sans s'en rendre compte, ce que vous voulez entendre. C'est ce qu'on appelle maintenant le biais de confirmation. Vous lirez ce que vous vous attendiez à lire, et on vous aura donné ce qu'on pense que vous vouliez lire. Ne rigolez pas, ce n'est pas une façon de parler mais un fait social avéré. On ne parle ni de manipulation consciente ni même de biais cognitifs, qui nous pousseraient à faire une chose plutôt qu'une autre, jugée plus rationnelle, mais d'une réaction humaine et naturelle, le mimétisme. Aller dans le sens de, adopter le même cadre de référence que la personne ou que le discours que l'on a en face de soi. Et ça, le problème, c'est qu'on ne sait pas le mesurer, surtout étant donné la quantité de questionnaires diffusés, ce dans des contextes très différents, sans toujours avoir le temps de se poser la question.
            </p>

            <h3>
              Les réponses fausses ou approximatives : ce qu'on ne sait pas mesurer
            </h3>

            <p>
              La dernière option, c'est que les répondants mentent. Les anthropologues ont remarqué que chez certaines catégories socio-professionnelles, dans certaines cultures, à certaines époques, il est tout simplement mal vu de livrer une information sur soi-même, un réflexe de protection en quelque sorte. Y serions-nous tout à fait étranger ? Ça ne vous a jamais dérangé de déclarer quatre fois dans l'année que vous étiez ou non en couple, et ce pour la CAF, les impôts, les dossiers d'arrivée dans une entreprise etc… Vous vous sentez moins énervés, voire pas du tout, si vous en comprenez la raison. Mais tout de même on reconnaît chez soi cette aversion à livrer ce qu'on vit comme intime à une entité abstraite. Si ce n'est pas votre cas tant mieux pour vous, c'est que vous le vivez beaucoup mieux, apprenez-moi. Mais je fais le pari que ça vous est déjà arrivé, de mentir sur un questionnaire, bien qu'il soit anonyme. Pas par malhonnêteté, parfois même simplement par flemme d'expliquer, ça va plus vite de dire oui. Ou vous avez déjà exagéré quelque chose dans le but que ce soit enfin pris en compte. Et bien ça non plus, on ne sait pas le mesurer. Il est possible de le voir lors d'un entretien, si on est entraîné. Mais on ne peut certainement pas le savoir au travers de la médiation de réponses anonymisées sur une plateforme digitale. D'où la frénésie de la « prise en main facile », et ça se comprend. On essaye de désactiver le plus possible ce qui pourrait pousser une personne à ne pas répondre, ou à répondre autre chose que ce qu'elle pense.
            </p>

            <h2>
              Conclusion
            </h2>

            <p>
              Pour terminer cette analyse des raisons pour lesquelles il vaut mieux ne pas poser de questions si l'on veut obtenir des réponses : il n'est pas anodin de demander à des millions de personnes, plusieurs fois par an, s'ils sont contents de leurs managers, ce qu'ils recherchent chez un employeur, s'ils voient leur travail comme un vecteur d'épanouissement personnel. Laissons-nous de nouveau surprendre par la fréquence. Il s'agit de questions personnelles, qui ont trait à la conception que l'on se fait du monde, de sa vie, de ses espoirs, de ses relations aux autres. Peut-être peut-on admettre qu'il soit naturel qu'il y ait quelques réticences.
            </p>

            <p>
              Si l'on veut se poser la question de ce qu'est un bon questionnaire d'entreprise, un qui vous dira pour de vrai comment vont les gens par exemple, s'ils sont contents de leur travail, s'ils ont envie d'engager des actions plus écologiques, et lesquelles, comme c'est souvent leur objet, on voit qu'on a du fil à retordre et qu'il ne suffit pas de rendre des questions inclusives pour obtenir des réponses pertinentes.
            </p>

            <p className="font-semibold">
              On pourrait conclure en revenant à la toute première raison donnée par Anton Blok : se débarrasser de ses propres catégories lorsque l'on veut que les gens s'expriment dans leurs propres termes. C'est la seule façon de pouvoir faire dire quelque chose aux réponses obtenues.
            </p>

            <p>
              Obtenir des réponses sincères, c'est susciter des témoignages qui soient dits comme ils le sont, comme ils l'auraient été sans notre intervention et pas autrement. Le travail de questionnement ne vient qu'après : que va-t-on pouvoir faire dire aux résultats obtenus par sa seule présence sur le terrain ? En essayant d'influer le moins possible sur ce qui est en cours et que l'on souhaite voir émerger pour ensuite pouvoir questionner.
            </p>

            <p>
              Raconte-moi d'abord, je te questionnerai ensuite.
            </p>

            <p>
              Autrice : <a href="https://www.linkedin.com/in/na%C3%AFs-bonnamy-jeanroy-9028ba207?originalSubdomain=fr">
                Nais Bonnamy Jeanroy
              </a>
            </p>
          </motion.div>
        </div>
      </article>
    </>
  );
}
