'use client';

import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import type { ReactNode } from 'react';
import RelatedPosts from '../RelatedPosts';

const slug = 'pourquoi-ne-pas-poser-de-questions';

/** Corps de l'article, traduit fr/en. */
const content: Record<'fr' | 'en', ReactNode> = {
  fr: (
    <>
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

      <h2>Un questionnaire, au fond, qu’est-ce que c’est ?</h2>

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
        J'ai écouté, par hasard, du moins en ne pensant pas du tout à ces questions-là, une série de cours d'anthropologie autour du thème <a href="https://www.youtube.com/playlist?list=PLID1ompbJIzRxtQn5ZhiZp6ZS-Ui92Csz">« Solidarité et violence »</a> dispensés en 2016 à la Sorbonne par Alexandre Duclos, enseignant-chercheur, dont la captation est disponible sur YouTube. Si ce n'est pas notre sujet, une parenthèse qu'il fait durant l'un de ses cours nous ouvre des portes pour penser l'objet questionnaire.
      </p>

      <h2>Un questionnaire n’est pas une pratique objective</h2>

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

      <h2>Un questionnaire n'est pas une démarche impersonnelle</h2>

      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-8">
        « En posant des questions, vous courez le risque d'instaurer une hiérarchie, c'est-à-dire de vous mettre dans une position supérieure. »
      </blockquote>

      <p>
        C'est un problème récurrent du chercheur, mais aussi du policier, du juge, de l'instructeur et même du manager ou du responsable ressources humaines. Comment obtenir des réponses sincères si la personne en face vous voit comme une figure d'autorité, à laquelle elle peut avoir envie de plaire ou de se confronter ? Si vous avez déjà eu une position hiérarchique vis-à-vis de quelqu'un vous le savez, ça modifie votre comportement, en tout cas il n'est pas facile que ça ne le modifie pas. C'est un vrai sujet lors de la diffusion d'un questionnaire : quel rapport la personne qui le reçoit a avec la personne, ou l'entité, qui l'a envoyé ? Même si le lien est diffus, que c'est la fonction RH de la boîte, la question demeure pertinente, parce que si ce lien influe sur autant d'aspects de notre vie, il serait illusoire de croire qu'il n'influe pas sur nos réponses à des questionnaires diffusés par des entreprises, fussent-ils anonymes et digitalisés. Même si l'on sait que nos réponses ne remonteront pas jusqu'à nous, il demeure vrai que nous avons, ou non, et à différents degrés, envie de leur faire plaisir. C'est humain.
      </p>

      <h2>Freins à l'engagement</h2>

      <h3>Ou des bonnes raisons de ne pas répondre lorsqu'on vous pose une question</h3>

      <p>
        Réunissant ce qui suit dans l'article mentionné précédemment, il est possible de délivrer ce que l'on pourrait appeler en entreprise les freins à l'engagement, c'est-à-dire ce qui peut pousser les gens à ne pas répondre, ou à ne pas répondre comme on le souhaiterait. Reprenons un constat fait par beaucoup de chercheurs en science sociale : hormis les grands bavards qui, comme moi, adorent raconter leur vie, en général, <a href="https://www.lexpress.fr/societe/les-questions-ahurissantes-de-l-enquete-de-l-insee_956405.html">les gens apprécient assez peu qu'on leur pose toute une série de questions.</a> On ne parle pas des potes à qui vous adorez vous confier en petit comité ou des clients avec lesquels il y a un vrai feeling qui vous fait prolonger le déjeuner en apéro. Non, de questions qui viennent de gens que vous ne connaissez pas plus que ça, sur des sujets qui peuvent relever de ce que vous considérez personnel, voire intime, pour un résultat dont vous ne voyez pas nécessairement l'intérêt pratique.
      </p>

      <h3>L'absence de réponse : taux de participation</h3>

      <p>
        Les gens peuvent tout simplement ne pas vous répondre, et c'est ce qu'on mesure par les taux de participation aux études pluri-annuelles diffusées par les départements des ressources humaines de la plupart des moyennes et grandes entreprises. Peut-être, et c'est une question que je laisse pour une prochaine fois, qu'il serait plus intéressant de se demander pourquoi quelqu'un n'a pas envie de répondre que de chercher à augmenter les taux de participation.
      </p>

      <h3>Les réponses orientées : biais de confirmation ou mimétisme ?</h3>

      <p>
        Ils peuvent aussi vous dire, même sans s'en rendre compte, ce que vous voulez entendre. C'est ce qu'on appelle maintenant le biais de confirmation. Vous lirez ce que vous vous attendiez à lire, et on vous aura donné ce qu'on pense que vous vouliez lire. Ne rigolez pas, ce n'est pas une façon de parler mais un fait social avéré. On ne parle ni de manipulation consciente ni même de biais cognitifs, qui nous pousseraient à faire une chose plutôt qu'une autre, jugée plus rationnelle, mais d'une réaction humaine et naturelle, le mimétisme. Aller dans le sens de, adopter le même cadre de référence que la personne ou que le discours que l'on a en face de soi. Et ça, le problème, c'est qu'on ne sait pas le mesurer, surtout étant donné la quantité de questionnaires diffusés, ce dans des contextes très différents, sans toujours avoir le temps de se poser la question.
      </p>

      <h3>Les réponses fausses ou approximatives : ce qu'on ne sait pas mesurer</h3>

      <p>
        La dernière option, c'est que les répondants mentent. Les anthropologues ont remarqué que chez certaines catégories socio-professionnelles, dans certaines cultures, à certaines époques, il est tout simplement mal vu de livrer une information sur soi-même, un réflexe de protection en quelque sorte. Y serions-nous tout à fait étranger ? Ça ne vous a jamais dérangé de déclarer quatre fois dans l'année que vous étiez ou non en couple, et ce pour la CAF, les impôts, les dossiers d'arrivée dans une entreprise etc… Vous vous sentez moins énervés, voire pas du tout, si vous en comprenez la raison. Mais tout de même on reconnaît chez soi cette aversion à livrer ce qu'on vit comme intime à une entité abstraite. Si ce n'est pas votre cas tant mieux pour vous, c'est que vous le vivez beaucoup mieux, apprenez-moi. Mais je fais le pari que ça vous est déjà arrivé, de mentir sur un questionnaire, bien qu'il soit anonyme. Pas par malhonnêteté, parfois même simplement par flemme d'expliquer, ça va plus vite de dire oui. Ou vous avez déjà exagéré quelque chose dans le but que ce soit enfin pris en compte. Et bien ça non plus, on ne sait pas le mesurer. Il est possible de le voir lors d'un entretien, si on est entraîné. Mais on ne peut certainement pas le savoir au travers de la médiation de réponses anonymisées sur une plateforme digitale. D'où la frénésie de la « prise en main facile », et ça se comprend. On essaye de désactiver le plus possible ce qui pourrait pousser une personne à ne pas répondre, ou à répondre autre chose que ce qu'elle pense.
      </p>

      <h2>Conclusion</h2>

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

      <p>Raconte-moi d'abord, je te questionnerai ensuite.</p>

      <p>
        Autrice : <a href="https://www.linkedin.com/in/na%C3%AFs-bonnamy-jeanroy-9028ba207?originalSubdomain=fr">
          Nais Bonnamy Jeanroy
        </a>
      </p>
    </>
  ),
  en: (
    <>
      <p>
        Let us start with a small quiz. Find what these very different things have in common:
      </p>

      <ol className="list-decimal pl-6 mb-8 text-lg">
        <li>Filling in a form for the French benefits office (CAF) or the tax authorities</li>
        <li>Answering a satisfaction survey received after buying a product or a service</li>
        <li>Taking one of the 16-personality tests (you know, ENFP, JT, that sort of thing)</li>
        <li>Answering a poll</li>
      </ol>

      <p>
        Answer: <span className="font-bold">all of these involve answering a questionnaire.</span>
      </p>

      <h2>What, in the end, is a questionnaire?</h2>

      <p>
        The question may sound odd, but let yourself be surprised, just for a moment, by how common a practice has become that has now entered everyday habits. Receiving yet another satisfaction survey in our inboxes is mildly irritating, yet we no longer find it surprising and we often answer, sometimes without even thinking about it.
      </p>

      <p>
        Although it first appeared in the early 20th century as a research tool developed by and for the social sciences, the <a href="https://shs.cairn.info/l-enquete-sociologique--9782130608738-page-93?lang=fr">academic practice of the questionnaire </a> still fuels many <a href="https://www.pedagogie.ac-aix-marseille.fr/upload/docs/application/pdf/2019-04/part-1_methodologie-questionnaire.pdf">debates and practical guides,</a> entire university courses can be devoted to it, and the methods used to obtain the most reliable and useful answers possible are still being refined.
      </p>

      <p>
        Since its creation, it has raised at least as many questions as it asks: what, in the end, is it for? What discourse dresses it up? Why a questionnaire? Is it anonymous? Are the questions the same for everyone? Are they leading? Is it even possible for them not to be? How are those it is aimed at encouraged to answer? Do they have the option not to answer? Are the results published? And so on…
      </p>

      <p>
        How can we find a way to read the object “questionnaire”? Not a sort of “guideline” for what the “right” “corporate questionnaire” would be — there are all kinds of those — but rather some leads for building a tool for reflecting on the device itself.
      </p>

      <p>
        By chance — at least, not thinking about these questions at all — I listened to a series of anthropology lectures on the theme of <a href="https://www.youtube.com/playlist?list=PLID1ompbJIzRxtQn5ZhiZp6ZS-Ui92Csz">“Solidarity and violence”</a> given in 2016 at the Sorbonne by Alexandre Duclos, an academic, and recorded on YouTube. Not our topic, yet a tangent he makes in one of his lectures opens doors for thinking about the object “questionnaire”.
      </p>

      <h2>A questionnaire is not an objective practice</h2>

      <p>
        In the <a href="https://www.youtube.com/watch?v=WYOaes0KuIE&list=PLID1ompbJIzRxtQn5ZhiZp6ZS-Ui92Csz&index=6&t=5324s">sixth lecture,</a> on the mafia, he refers to an article published in 2001 in volume 31 of the journal Ethnologie française (pp. 61–67) entitled <a href="https://shs.cairn.info/revue-ethnologie-francaise-2001-1-page-61?lang=fr">The mafia of a Sicilian village.</a> It describes the difficulties Anton Block, an anthropologist, faced when questioning people in such a context:
      </p>

      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-8">
        “By asking questions, you can very easily, and without meaning to, introduce and impose your own categories on the very people whose own categories you want to pin down. This would go beyond the very reason for your presence: understanding these people on their own terms, discovering their worldview.”
      </blockquote>

      <p>
        Anton Block is trying, among other things, to find out how the mafia is perceived by its members, whether they talk about it freely or not, to whom, how, and in what terms. Impossible to achieve if he shows up with a pre-defined set of questions.
      </p>

      <p className="font-semibold">
        The idea is this: by asking someone a question, you steer the way they will answer. In corporate speak, we would call that a bias.
      </p>

      <p>
        If the question arises for an anthropologist, it seems logical to extend it to every field that uses an object akin to the questionnaire, including the forms drawn up by human resources departments on quality of working life, for example. Or by a health professional issuing or certifying a form designed to assess psychosocial risks (in the jargon, RPS) in the workplace. The person who writes the questionnaire belongs to the company, or works for a consulting firm — another company with its own practices, values and codes — and already has a feel for the trade, for what they expect from the questionnaire, for the phenomenon they wish to observe, such as workplace distress. Yet they must try to shed their own preconceptions and ask as neutral questions as possible, so that the answers genuinely reflect what the person thinks and feels, in their own terms, according to their own categories.
      </p>

      <h2>A questionnaire is not an impersonal exercise</h2>

      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-8">
        “By asking questions, you run the risk of setting up a hierarchy — that is, of placing yourself in a superior position.”
      </blockquote>

      <p>
        This is a recurring problem for the researcher, but also for the police officer, the judge, the instructor and even the manager or the HR manager. How can you get sincere answers if the person opposite sees you as a figure of authority, eager to please or to confront you? If you have ever held a hierarchical position over someone, you know it changes your behaviour — at any rate, it is not easy for it not to. It is a real issue when a questionnaire is distributed: what relationship does the person receiving it have with the person, or the entity, who sent it? Even if the link is diffuse — it is just the HR function of the company — the question remains relevant, because if such a link influences so many aspects of our lives, it would be an illusion to believe it does not influence our answers to questionnaires distributed by companies, even anonymous, digitised ones. Even knowing that our answers will not be traced back to us, it remains true that we do, or do not, and to varying degrees, want to please them. That is human.
      </p>

      <h2>Barriers to engagement</h2>

      <h3>Or the good reasons for not answering when you are asked a question</h3>

      <p>
        Bringing together what follows from the article mentioned above, it is possible to set out what, in corporate terms, could be called the barriers to engagement — that is, what can push people not to answer, or not to answer the way we would like. Let us take up an observation made by many social science researchers: apart from the great talkers who, like me, love telling their life story, in general <a href="https://www.lexpress.fr/societe/les-questions-ahurissantes-de-l-enquete-de-l-insee_956405.html">people are not very fond of being asked a whole string of questions.</a> We are not talking about friends you love confiding in over a small gathering, or clients with whom there is such a rapport that you extend lunch into a drink. No — questions that come from people you barely know, on subjects that can touch what you consider personal, even intimate, for a result whose practical interest you do not necessarily see.
      </p>

      <h3>Not answering: participation rates</h3>

      <p>
        People can simply not answer you, and that is what participation rates in the multi-year studies distributed by the HR departments of most medium and large companies measure. Perhaps — and this is a question I will leave for another time — it would be more interesting to ask why someone does not want to answer than to try to boost participation rates.
      </p>

      <h3>Biased answers: confirmation bias or mimicry?</h3>

      <p>
        They can also tell you, even without realising it, what you want to hear. This is what we now call confirmation bias. You will read what you expected to read, and you will have been given what people think you wanted to read. Do not laugh: this is not a figure of speech but an established social fact. We are not talking about conscious manipulation, nor even about the cognitive biases that would push us to do one thing rather than another deemed more rational, but about a natural, human reaction — mimicry. Going along with, adopting the same frame of reference as the person or the discourse in front of us. And the problem is that this cannot be measured, especially given the number of questionnaires distributed, in very different contexts, without always having the time to ask the question.
      </p>

      <h3>False or approximate answers: what cannot be measured</h3>

      <p>
        The last option is that respondents lie. Anthropologists have noticed that among certain socio-professional groups, in certain cultures, at certain times, it is simply frowned upon to disclose information about oneself — a kind of protective reflex. Would we be entirely strangers to that? It has never bothered you to declare four times a year whether you were in a relationship or not, for the CAF, the tax office, your onboarding paperwork, and so on? You feel less annoyed, or not at all, if you understand the reason for it. But we still recognise in ourselves this reluctance to hand over what we live as intimate to an abstract entity. If that is not the case for you, good for you — you are doing much better with it, teach me. But I bet it has happened to you too, lying on a questionnaire, even an anonymous one. Not out of dishonesty — sometimes simply out of laziness to explain; it is faster to say yes. Or you have exaggerated something so that it would finally be taken into account. Well, that cannot be measured either. It is possible to spot it in an interview, if you are trained. But you certainly cannot know it through the mediation of anonymised answers on a digital platform. Hence the craze for “easy to fill in”, and that is understandable. We try to disable as much as possible whatever might push a person not to answer, or to answer something other than what they think.
      </p>

      <h2>Conclusion</h2>

      <p>
        To close this analysis of why it is better not to ask questions if you want answers: it is no small thing to ask millions of people, several times a year, whether they are happy with their managers, what they look for in an employer, whether they see their work as a vehicle for personal fulfilment. Let us be surprised again by the frequency. These are personal questions, touching on how one sees the world, one’s life, one’s hopes, one’s relationships with others. Perhaps we can accept that some reluctance is only natural.
      </p>

      <p>
        If we want to ask what a good corporate questionnaire is — one that would genuinely tell you how people are, whether they are happy in their work, whether they want to take greener action and which ones, as is often their purpose — we can see there is a lot of work to do, and that making questions inclusive is not enough to get relevant answers.
      </p>

      <p className="font-semibold">
        We could conclude by returning to the very first reason given by Anton Blok: shedding your own categories if you want people to speak in their own terms. That is the only way to make the answers you obtain actually say something.
      </p>

      <p>
        Getting sincere answers means eliciting testimonies that are told as they are, as they would have been without our intervention and not otherwise. The work of questioning comes only afterwards: what will we be able to make the results say, by our mere presence in the field? By trying to influence as little as possible what is under way and what we want to see emerge, so that we can then question it.
      </p>

      <p>Tell me first, I will question you afterwards.</p>

      <p>
        Author: <a href="https://www.linkedin.com/in/na%C3%AFs-bonnamy-jeanroy-9028ba207?originalSubdomain=fr">
          Nais Bonnamy Jeanroy
        </a>
      </p>
    </>
  ),
};

export default function BlogPost() {
  const locale = useLocale() as 'fr' | 'en';
  const isEn = locale === 'en';
  const t = useTranslations('blog.posts.pourquoi-ne-pas-poser-de-questions');

  return (
    <article className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="container mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-cohortes-orange transition-colors mb-8"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {isEn ? 'Back to the blog' : 'Retour au blog'}
        </Link>

        <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
          <span className="px-3 py-1 bg-cohortes-orange/10 text-cohortes-orange rounded-full font-semibold">
            {isEn ? 'Methodology' : 'Méthodologie'}
          </span>
          <time>
            {new Date('2024-01-10').toLocaleDateString(isEn ? 'en-GB' : 'fr-FR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <span>·</span>
          <span>{isEn ? '5 min read' : '5 min de lecture'}</span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-cohortes-dark mb-8 leading-tight"
        >
          {t('title')}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-xl max-w-none [&_a]:text-blue-600 [&_a]:underline [&>p]:mb-8 [&_p]:text-lg [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:mt-12 [&_h2]:mb-6 [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-4"
        >
          {content[locale]}
        </motion.div>

        <RelatedPosts currentSlug={slug} />
      </div>
    </article>
  );
}
