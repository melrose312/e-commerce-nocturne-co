import dracula from "./assets/dracula.jpg";
import thisThingBetweenUs from "./assets/this-thing-between-us.jpg";
import hauntingHillHouse from "./assets/haunting-hill-house.jpg";
import penpal from "./assets/penpal.jpg";
import petSematary from "./assets/pet-sematary.jpg";
import seed from "./assets/seed.jpg";
import stolenTongues from "./assets/stolen-tongues.jpg";
import incidentsAroundTheHouse from "./assets/incidents-around-the-house.jpg";
import travisWalton from "./assets/travis-walton.jpg";
import birdBox from "./assets/bird-box.jpg";
import mary from "./assets/mary.jpg";
import ringShout from "./assets/ring-shout.jpg";
import slewFoot from "./assets/slewfoot.jpg";
import hpLovecraftFiction from "./assets/hp-lovecraft-fiction.jpg";
import intercepts from "./assets/intercepts.jpg";
import lastDays from "./assets/last-days.jpg";

// FAKE DATA
export const books = [
  {
    id: 1,
    title: "Dracula",
    url: dracula,
    originalPrice: 20.0,
    salePrice: 11.99,
    rating: 4,
    description:
      "When Jonathan Harker visits Transylvania to help Count Dracula with the purchase of a London house, he makes a series of horrific discoveries about his client. Soon afterwards, various bizarre incidents unfold in England: an apparently unmanned ship is wrecked off the coast of Whitby; a young woman discovers strange puncture marks on her neck; and the inmate of a lunatic asylum raves about the 'Master' and his imminent arrival..",
  },
  {
    id: 2,
    title: "This Thing Between Us",
    url: thisThingBetweenUs,
    originalPrice: 10.99,
    salePrice: null,
    rating: 5,
    description:
      "This Thing Between Us by Gus Moreno is a horror novel about Thiago, a man dealing with intense grief after his wife Vera dies in a freak accident following a supernatural haunting in their Chicago condo. The story, told as a monologue to his dead wife, explores how a sentient smart speaker (Itza) and a malevolent, cosmic entity consume his life.",
  },
  {
    id: 3,
    title: "The Haunting of Hill House",
    url: hauntingHillHouse,
    originalPrice: 26.99,
    salePrice: 15.99,
    rating: 3.5,
    description:
      "Hill House is a mansion in a location never specified, surrounded by hills. Dr. John Montague, an investigator of the supernatural, has rented Hill House for a summer and has invited as his guests several people chosen because of their experiences with paranormal events. Of these, only two accept: Eleanor Vance, a shy young woman who resents caring for her demanding, disabled mother and Theodora, a bohemian artist. Both are to join Montague at Hill House, along with Luke Sanderson, the young heir to the estate, where Montague hopes to find scientific evidence of the existence of the supernatural.",
  },
  {
    id: 4,
    title: "PenPal",
    url: penpal,
    originalPrice: 12.99,
    salePrice: 8.99,
    rating: 4.5,
    description:
      "In kindergarten, the narrator befriends a boy named Josh. One day, their class conducts a penpal experiment, in which the children tie self-addressed letters to balloons and send them off. As the children receive responses, their teacher tracks how far their balloons went on a state map in the classroom. While most of the children get letters back, the narrator starts to believe his balloon got lost, until he receives an envelope containing a single, poorly shot Polaroid photo. Over the school year, he receives over 50 other photographs, all without any letter. Soon after, he realizes that the pictures all contain him and his mother, which prompts her to call the police. The narrator recalls a series of disconneted events which, while innocuous to him as a child, take on a new sinister meaning from an adult perspective.",
  },
  {
    id: 5,
    title: "Pet Sematary",
    url: petSematary,
    originalPrice: 27.99,
    salePrice: 16.99,
    rating: 4.5,
    description:
      "Louis Creed, a doctor from Chicago, is appointed director of the University of Maine's campus health service. He moves to a house near the town of Ludlow with his wife Rachel, their two young children, Ellie and Gage, and Ellie's cat, Winston Churchill (Church). Their elderly neighbor, Jud Crandall, warns Louis and Rachel about the highway that runs past their house, which is frequented by speeding trucks. Jud and Louis become close friends, with Louis viewing Jud as a kind of surrogate father. Jud takes the family on a walk in the woods behind their home. A well-tended path leads to a pet cemetery (misspelled sematary on the sign) maintained by the children of the town. Louis is charmed, but Rachel finds the concept of the pet cemetery disturbing. She herself finds it difficult to talk about death, following the traumatic death of her sister Zelda when they were both children.",
  },
  {
    id: 6,
    title: "Seed",
    url: seed,
    originalPrice: 14.95,
    salePrice: 9.95,
    rating: 4,
    description:
      "In the vine-twisted swamps of Louisiana, the shadows have teeth. Jack Winter has spent his entire life running from something no one else can see. His childhood is his darkest secret, but after a near fatal accident along a deserted road, the darkness he was sure he’d escaped rears its ugly head… and smiles. But this time, he isn’t the only one who sees the soulless eyes of his past. This time, his six-year-old daughter Charlie leans into his ear and whispers: Daddy, I saw it too. And then she begins to change. Faced with reliving the nightmares of his childhood, Jack watches his daughter spiral into the shadows that had nearly consumed him twenty years before.",
  },
  {
    id: 7,
    title: "Stolen Tongues",
    url: stolenTongues,
    originalPrice: 19.99,
    salePrice: null,
    rating: 5,
    description:
      "A romantic cabin getaway doesn’t go exactly as planned. High up on the windswept cliffs of Pale Peak, Faye and Felix celebrate their new engagement. But soon, a chorus of ghastly noises erupts from the nearby the screams of animals, the cries of children, and the mad babble of a hundred mournful voices. A dark figure looms near the windows in the dead of night, whispering to Faye. As the weather turns deadly, Felix discovers that his terrified fiancée isn’t just mumbling in her sleep – she’s whispering back.",
  },
  {
    id: 8,
    title: "Incidents Around the House",
    url: incidentsAroundTheHouse,
    originalPrice: 20.0,
    salePrice: 18.49,
    rating: 4.5,
    description:
      "To eight-year-old Bela, her family is her world. There’s Mommy, Daddo, and Grandma Ruth. But there is also Other Mommy, a malevolent entity who asks her every day: “Can I go inside your heart?” When horrifying incidents around the house signal that Other Mommy is growing tired of asking Bela the same question, over and over . . . Bela understands that unless she says yes, soon her family must pay. Other Mommy is getting restless, stronger, bolder. Only the bonds of family can keep Bela safe but other incidents show cracks in her parents' marriage. The safety Bela relies on is on the brink of unraveling. But Other Mommy needs an answer. Incidents Around the House is a chilling, wholly unique tale of true horror told by the child Bela. A story about a family as haunted as their home. ",
  },
  {
    id: 9,
    title: "Fire In The Sky",
    url: travisWalton,
    originalPrice: 16.99,
    salePrice: null,
    rating: 3.5,
    description:
      "On 11/5/1975 a group of loggers in the mountains of northeastern Arizona observed a strange, unusually bright light in the sky. One of them, Travis Walton, recklessly left the safety of their truck to take a closer look. Suddenly, as he walked toward the light, Walton was blasted back by a bolt of mysterious energy. His companions fled in fear. When they reported an encounter with a UFO--something they would have considered impossible if they had not witnessed it themselves--the men were suspected of murder. For five days authorities mounted a massive manhunt in search of Walton or his body. Then Walton reappeared, disoriented & initially unable to tell the whole story of his terrifying encounter. In Fire in the Sky Travis Walton relates in his own words the best documented account of alien abduction yet recorded, the story of his harrowing ordeal at the hands of silent captors & his return to a disbelieving world of hostile interrogators, exploitative press & self-styled debunkers. Travis recounts the struggle to get a fair hearing & confronts his detractors with a stinging rebuttal.",
  },
  {
    id: 10,
    title: "Bird Box",
    url: birdBox,
    originalPrice: 25.99,
    salePrice: 14.95,
    rating: 4,
    description:
      "Something is out there, something terrifying that must not be seen. One glimpse of it, and a person is driven to deadly violence. No one knows what it is or where it came from. Five years after it began, a handful of scattered survivors remains, including Malorie and her two young children. Living in an abandoned house near the river, she has dreamed of fleeing to a place where they might be safe. Now that the boy and girl are four, it's time to go, but the journey ahead will be terrifying: twenty miles downriver in a rowboat—blindfolded—with nothing to rely on but her wits and the children's trained ears. One wrong choice and they will die. Something is following them all the while, but is it man, animal, or monster? ",
  },
  {
    id: 11,
    title: "Mary: A Novel",
    url: mary,
    originalPrice: 16.99,
    salePrice: null,
    rating: 5,
    description:
      "Mary is a quiet, middle-aged woman doing her best to blend into the background. Unremarkable. Invisible. Unknown even to herself.But lately, things have been changing inside Mary. Along with the hot flashes and body aches, she can’t look in a mirror without passing out, and the voices in her head have been urging her to do unspeakable things.Fired from her job in New York, she moves back to her hometown, hoping to reconnect with her past and inner self. Instead, visions of terrifying, mutilated specters overwhelm her with increasing regularity and she begins auto-writing strange thoughts and phrases. Mary discovers that these experiences are echoes of an infamous serial killer. Then the killings begin again. Mary’s definitely going to find herself.",
  },
  {
    id: 12,
    title: "Ring Shout",
    url: ringShout,
    originalPrice: 19.99,
    salePrice: 13.99,
    rating: 4.5,
    description:
      "In 1915, The Birth of a Nation cast a spell across America, swelling the Klan's ranks and drinking deep from the darkest thoughts of white folk. All across the nation they ride, spreading fear and violence among the vulnerable. They plan to bring Hell to Earth. But even Ku Kluxes can die. Standing in their way is Maryse Boudreaux and her fellow resistance fighters, a foul-mouthed sharpshooter and a Harlem Hellfighter. Armed with blade, bullet, and bomb, they hunt their hunters and send the Klan's demons straight to Hell. But something awful's brewing in Macon, and the war on Hell is about to heat up. Can Maryse stop the Klan before it ends the world?",
  },
  {
    id: 13,
    title: "Slewfoot",
    url: slewFoot,
    originalPrice: 22.0,
    salePrice: null,
    rating: 5,
    description:
      "A spirited young Englishwoman, Abitha, arrives at a Puritan colony betrothed to a stranger – only to become quickly widowed when her husband dies under mysterious circumstances. All alone in this pious and patriarchal society, Abitha fights for what little freedom she can grasp onto, while trying to stay true to herself and her past. Enter Slewfoot, a powerful spirit of antiquity newly woken ... and trying to find his own role in the world. Healer or destroyer? Protector or predator? But as the shadows walk and villagers start dying, a new rumor is whispered: Witch. Both Abitha and Slewfoot must swiftly decide who they are, and what they must do to survive in a world intent on hanging any who meddle in the dark arts.",
  },
  {
    id: 14,
    title: "The Complete Fiction of H.P Lovecraft",
    url: hpLovecraftFiction,
    originalPrice: 14.99,
    salePrice: null,
    rating: 4.5,
    description:
      "The Complete Fiction of H.P. Lovecraft collects the author's novel, four novellas, and fifty-three short stories. Written between the years 1917 and 1935, this collection features Lovecraft's trademark fantastical creatures and supernatural thrills, as well as many horrific and cautionary science-fiction themes. Included in this volume are The Case of Charles Dexter Ward, The Call of Cthulhu, The Dream-Quest of Unknown Kadath, At the Mountains of Madness, The Shadow Over Innsmouth, The Color Out of Space, The Dunwich Horror, and many more hair-raising tales.",
  },
  {
    id: 15,
    title: "Intercepts",
    url: intercepts,
    originalPrice: 13.99,
    salePrice: 9.99,
    rating: 5,
    description:
      "The government wanted to unlock hidden abilities in the human mind. They put subjects in extreme sensory deprivation. All the test subjects went violently insane. But the research continued. Today it has been perfected. Almost perfected. Almost...  ",
  },
  {
    id: 16,
    title: "Last Days",
    url: lastDays,
    originalPrice: 20.99,
    salePrice: null,
    rating: 4,
    description:
      "When guerrilla documentary maker, Kyle Freeman, is asked to shoot a film on the notorious cult known as the Temple of the Last Days, it appears his prayers have been answered. The cult became a worldwide phenomenon in 1975 when there was a massacre including the death of its infamous leader, Sister Katherine. Kyle's brief is to explore the paranormal myths surrounding an organization that became a testament to paranoia, murderous rage, and occult rituals. The shoot's locations take him to the cult's first temple in London, an abandoned farm in France, and a derelict copper mine in the Arizonan desert where The Temple of the Last Days met its bloody end. But when he interviews those involved in the case, those who haven't broken silence in decades, a series of uncanny events plague the shoots. Troubling out-of-body experiences, nocturnal visitations, the sudden demise of their interviewees and the discovery of ghastly artifacts in their room make Kyle question what exactly it is the cult managed to awaken – and what is its interest in him?",
  },
];
