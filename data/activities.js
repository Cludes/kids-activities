const ACTIVITIES = [

  // ── CRAFTS ──────────────────────────────────────────────────────────────
  {
    id: 1, title: "Paper Plate Animals", category: "crafts", emoji: "🐾",
    ages: "3–8", time: "30 min", difficulty: "easy",
    supplies: ["Paper plates", "Washable paint", "Scissors", "Glue stick", "Construction paper", "Googly eyes", "Markers"],
    description: "Turn plain paper plates into your favourite animals using paint and basic craft supplies.",
    steps: [
      "Choose which animal you want to make.",
      "Paint the plate the animal's main colour and leave to dry completely.",
      "While it dries, cut out ears, tails, fins, or wings from construction paper.",
      "Glue all the paper pieces onto the dry plate.",
      "Stick on googly eyes.",
      "Add a mouth, stripes, spots, or other details with markers."
    ],
    tips: "Lay down newspaper before painting. Making a zoo? Everyone picks a different animal!"
  },
  {
    id: 2, title: "Sock Puppets", category: "crafts", emoji: "🧦",
    ages: "4–10", time: "20 min", difficulty: "easy",
    supplies: ["Old clean socks", "Googly eyes", "Felt scraps", "Glue gun or fabric glue", "Yarn", "Scissors", "Markers"],
    description: "Give old socks a second life as wacky characters ready for a puppet show.",
    steps: [
      "Slip a sock over your hand to figure out where the face should go.",
      "Mark eye positions lightly with a pen, then remove the sock.",
      "Glue on googly eyes.",
      "Cut felt into tongues, ears, hair, or other features and glue them on.",
      "Add yarn for hair or a mane.",
      "Let dry completely, then put on a puppet show!"
    ],
    tips: "Set up a table with a blanket draped over it as a puppet theatre."
  },
  {
    id: 3, title: "Cardboard Box Playhouse", category: "crafts", emoji: "🏠",
    ages: "4–10", time: "1–2 hrs", difficulty: "medium",
    supplies: ["Large cardboard box", "Box cutter (adult use)", "Washable paint", "Brushes", "Tape", "Markers"],
    description: "Transform a large appliance or moving box into a kid-sized house, shop, or rocket ship.",
    steps: [
      "Decide what the box will be  - house, spaceship, shop, castle.",
      "An adult uses the box cutter to cut out windows and a door that opens.",
      "Kids paint the outside with the chosen design.",
      "Add details with markers  - bricks, flowers, a sign, flames for a rocket.",
      "Decorate the inside too  - draw shelves, a fireplace, instrument panels.",
      "Leave to dry, then move in!"
    ],
    tips: "If you have two boxes, tape them together for a bigger build."
  },
  {
    id: 4, title: "Origami Animals", category: "crafts", emoji: "🦢",
    ages: "6–12", time: "20 min", difficulty: "medium",
    supplies: ["Square pieces of paper (origami paper or cut from magazines)", "Markers for adding faces"],
    description: "Fold paper into animals  - start with a simple dog or boat and work up to a crane.",
    steps: [
      "Start with the classic paper crane or a simple dog face.",
      "Fold paper in half diagonally to form a triangle.",
      "Follow along with a printed guide or YouTube tutorial for the specific animal.",
      "Make sharp, crisp folds by running your fingernail along each crease.",
      "Add eyes or other details with a marker.",
      "Make a whole flock or zoo!"
    ],
    tips: "Start with a dog face or fortune teller  - they only take a few steps. Cranes are great for ages 7+."
  },
  {
    id: 5, title: "Dream Catcher", category: "crafts", emoji: "🌙",
    ages: "6–12", time: "45 min", difficulty: "medium",
    supplies: ["Small embroidery hoop or bendy twig", "Yarn in several colours", "Feathers", "Beads", "Scissors"],
    description: "Weave a beautiful dream catcher to hang above your bed.",
    steps: [
      "Wrap the outside ring tightly with yarn, overlapping as you go.",
      "Tie a length of yarn to the ring and start weaving a web pattern across the middle, looping through the outer yarn.",
      "Thread beads onto the web yarn as you go.",
      "Continue until you reach the centre, then tie off.",
      "Cut three lengths of yarn and tie them to the bottom of the ring.",
      "Thread beads and tie feathers onto each hanging strand."
    ],
    tips: "The 'wrong' ones still look beautiful. Use multiple colours for a rainbow effect."
  },
  {
    id: 6, title: "Popsicle Stick Picture Frame", category: "crafts", emoji: "🖼️",
    ages: "4–10", time: "30 min", difficulty: "easy",
    supplies: ["Popsicle sticks (8–12 per frame)", "White glue or hot glue (adult)", "Paint", "Decorations: gems, buttons, stickers", "Magnet strips or string to hang"],
    description: "Build a custom picture frame for a favourite photo or drawing.",
    steps: [
      "Lay four popsicle sticks in a square, overlapping at the corners.",
      "Glue the corners together and let dry.",
      "Add a second layer of sticks on top for thickness and extra strength.",
      "Paint the frame your favourite colour and let dry.",
      "Decorate with gems, buttons, paint dots, or stickers.",
      "Glue a strip magnet on the back or tie string to hang it up, then add your photo."
    ],
    tips: "Make a bunch and give them as gifts with a printed photo inside."
  },
  {
    id: 7, title: "Tissue Paper Flowers", category: "crafts", emoji: "🌸",
    ages: "4–10", time: "20 min", difficulty: "easy",
    supplies: ["Tissue paper in several colours", "Pipe cleaners or wooden skewers", "Scissors"],
    description: "Make a whole bouquet of fluffy flowers that never wilt.",
    steps: [
      "Stack 6–8 sheets of tissue paper on top of each other.",
      "Fold the whole stack accordion-style (back and forth) in 3cm strips.",
      "Fold the accordion in half and wrap a pipe cleaner tightly around the middle  - twist to secure.",
      "Fan out both ends of the accordion so it looks like a bow tie.",
      "Gently pull each layer of tissue paper upward toward the centre to fluff the petals.",
      "Arrange your flowers in a vase or tie them in a bunch."
    ],
    tips: "Mix two colours per flower for a beautiful ombre effect."
  },
  {
    id: 8, title: "Paper Bag Puppets", category: "crafts", emoji: "🎭",
    ages: "3–8", time: "20 min", difficulty: "easy",
    supplies: ["Small paper lunch bags", "Construction paper", "Crayons or markers", "Googly eyes", "Glue"],
    description: "Fold-bottom paper bags become animated characters  - the folded flap is the mouth.",
    steps: [
      "Lay the bag flat with the folded bottom facing up  - this becomes the head.",
      "Draw or glue on eyes to the flat bottom flap.",
      "Draw a tongue or teeth on the part of the bag below the flap.",
      "Cut ears, hair, horns, or antennae from construction paper and glue on.",
      "Slide your hand inside and open and close the flap to make it talk.",
      "Put on a show!"
    ],
    tips: "Make a cast of characters and act out a favourite story together."
  },
  {
    id: 9, title: "Rock Painting", category: "crafts", emoji: "🪨",
    ages: "4–12", time: "45 min", difficulty: "easy",
    supplies: ["Smooth rocks (collected or bought)", "Acrylic paint", "Small brushes", "Mod Podge or clear sealer", "Black marker"],
    description: "Turn ordinary rocks into colourful characters, animals, or inspirational messages.",
    steps: [
      "Wash and dry your rocks completely.",
      "Paint the whole rock a solid base colour and let dry.",
      "Draw your design lightly in pencil, then paint it.",
      "Let each colour dry before adding the next so they don't blend by accident.",
      "Outline details with a black marker for extra pop.",
      "Seal with Mod Podge or clear acrylic sealer once fully dry.",
      "Hide them in the neighbourhood for others to find, or keep them as decorations!"
    ],
    tips: "Flat, palm-sized river rocks work best. Prime with white paint first for brighter colours."
  },
  {
    id: 10, title: "Yarn Wrapped Letters", category: "crafts", emoji: "🔤",
    ages: "5–12", time: "30–60 min", difficulty: "easy",
    supplies: ["Cardboard or pre-cut wooden letters", "Yarn in multiple colours", "Scissors", "White glue"],
    description: "Wrap letters with colourful yarn to spell out a name or word for a bedroom wall.",
    steps: [
      "Cut a notch at the start of your letter to anchor the yarn.",
      "Apply a thin line of glue along a small section and press the yarn down.",
      "Continue wrapping tightly, adding small dabs of glue as you go.",
      "Switch colours by tying on a new piece of yarn and tucking the knot under the next wrap.",
      "When you reach the end, tuck the yarn tail under the last few wraps and glue.",
      "Let dry fully, then hang on the wall!"
    ],
    tips: "Spell out a child's name for their bedroom door  - a great gift idea too."
  },
  {
    id: 11, title: "Toilet Roll Binoculars", category: "crafts", emoji: "🔭",
    ages: "3–7", time: "15 min", difficulty: "easy",
    supplies: ["2 toilet paper rolls per pair", "Tape", "Paint or markers", "Yarn or string", "Hole punch"],
    description: "Make pretend binoculars for backyard exploring and imaginary adventures.",
    steps: [
      "Tape the two toilet rolls side by side.",
      "Paint or colour the outside however you like  - camouflage, rainbow, or solid colour.",
      "Let dry.",
      "Punch a hole on each outer side.",
      "Thread yarn through both holes and tie a knot so the binoculars hang around your neck.",
      "Head outside to spot birds, bugs, and neighbours!"
    ],
    tips: "Add star stickers to the outside for a galaxy explorer look."
  },
  {
    id: 12, title: "Collage Nature Frames", category: "crafts", emoji: "🍂",
    ages: "4–10", time: "40 min", difficulty: "easy",
    supplies: ["Cardboard or a plain wooden frame", "Collected nature items: leaves, twigs, seeds, shells", "White glue", "Paint"],
    description: "Press and glue natural materials onto a frame to make a one-of-a-kind piece.",
    steps: [
      "Paint the base frame or cardboard and let dry.",
      "Arrange your collected items on the frame before gluing to plan the design.",
      "Glue items down starting with the largest pieces first.",
      "Fill gaps with smaller items like seeds, pebbles, or tiny shells.",
      "Let dry overnight  - heavy items may need extra glue.",
      "Display it or add a photo in the middle."
    ],
    tips: "Collect materials on a walk beforehand. Press flowers in a heavy book for a few days first."
  },

  // ── COOKING & BAKING ────────────────────────────────────────────────────
  {
    id: 13, title: "Homemade Pizza", category: "cooking", emoji: "🍕",
    ages: "4–12", time: "45 min", difficulty: "medium",
    supplies: ["Pizza dough (store-bought or homemade)", "Tomato sauce", "Shredded cheese", "Toppings of choice", "Baking sheet or pizza stone", "Rolling pin"],
    description: "Everyone makes their own personal pizza with their favourite toppings.",
    steps: [
      "Preheat oven to 220°C / 425°F.",
      "Divide the dough into personal-sized portions.",
      "Sprinkle flour on the counter and roll each portion into a flat round.",
      "Place on a greased baking sheet.",
      "Spread a spoonful of tomato sauce, leaving a border for the crust.",
      "Add cheese and chosen toppings.",
      "Bake for 10–12 minutes until the crust is golden and cheese is bubbly.",
      "Let cool for 2 minutes before eating."
    ],
    tips: "Mini naan bread or English muffins make great quick pizza bases for younger kids."
  },
  {
    id: 14, title: "Fruit Kabobs", category: "cooking", emoji: "🍡",
    ages: "3–10", time: "15 min", difficulty: "easy",
    supplies: ["Assorted fruit: strawberries, grapes, melon, pineapple, banana", "Wooden skewers or reusable picks", "Yogurt dip (optional)"],
    description: "Thread colourful fruit onto skewers to make a rainbow snack  - no cooking needed.",
    steps: [
      "Wash and dry all fruit.",
      "Cut larger fruit like melon or pineapple into bite-sized chunks.",
      "Lay out the fruit in colour order to plan a rainbow pattern.",
      "Thread the fruit onto skewers, alternating colours.",
      "Arrange on a plate.",
      "Serve with yogurt as a dip."
    ],
    tips: "Use blunt party picks instead of sharp skewers for young kids. Challenge them to make a pattern."
  },
  {
    id: 15, title: "Decorated Sugar Cookies", category: "cooking", emoji: "🍪",
    ages: "4–12", time: "1.5 hrs", difficulty: "medium",
    supplies: ["Sugar cookie dough (store-bought or homemade)", "Cookie cutters", "Royal icing or simple glaze", "Food colouring", "Sprinkles"],
    description: "Bake and decorate sugar cookies  - the decorating is the best part.",
    steps: [
      "Roll out the cookie dough to about 5mm thick.",
      "Cut out shapes with cookie cutters.",
      "Bake according to the recipe or packet instructions, then cool completely.",
      "Mix icing sugar with a little milk and a drop of food colouring.",
      "Spread or pipe icing onto the cooled cookies.",
      "Add sprinkles, edible glitter, or candy before the icing sets.",
      "Let dry for 30 minutes."
    ],
    tips: "Outline cookies with a thicker icing first, then flood with thinner icing  - it looks professional!"
  },
  {
    id: 16, title: "Smoothie Bowl", category: "cooking", emoji: "🥣",
    ages: "4–12", time: "15 min", difficulty: "easy",
    supplies: ["Frozen banana", "Frozen berries", "Yogurt", "Milk or juice", "Toppings: granola, fresh fruit, seeds, coconut", "Blender"],
    description: "Blend a thick, vibrant smoothie base and top it like a bowl of edible art.",
    steps: [
      "Add frozen banana, frozen berries, yogurt, and a splash of liquid to the blender.",
      "Blend until smooth and thick  - it should be spoonable, not pourable.",
      "Pour into a bowl.",
      "Arrange toppings in sections across the top: granola, sliced banana, berries, seeds, coconut.",
      "Eat immediately before it melts."
    ],
    tips: "The less liquid you add, the thicker and more scoopable it will be. Kids love arranging the toppings themselves."
  },
  {
    id: 17, title: "Mini Pancakes", category: "cooking", emoji: "🥞",
    ages: "3–10", time: "30 min", difficulty: "easy",
    supplies: ["Pancake mix or homemade batter", "Butter", "Frying pan", "Small ladle or spoon", "Toppings: maple syrup, berries, banana, whipped cream"],
    description: "Make a giant stack of silver dollar pancakes to build the tallest breakfast tower.",
    steps: [
      "Mix pancake batter according to recipe.",
      "Heat a pan on medium and melt a little butter.",
      "Drop a small spoonful (about a tablespoon) of batter for each mini pancake.",
      "Cook until bubbles form on top, then flip.",
      "Cook 1 more minute until golden underneath.",
      "Stack them up high and add toppings."
    ],
    tips: "Add blueberries or chocolate chips to the batter before flipping for extra fun."
  },
  {
    id: 18, title: "No-Bake Energy Balls", category: "cooking", emoji: "⚡",
    ages: "5–12", time: "20 min", difficulty: "easy",
    supplies: ["1 cup rolled oats", "½ cup peanut butter", "⅓ cup honey", "½ cup mini chocolate chips", "Bowl", "Baking sheet"],
    description: "Roll oats, peanut butter, honey, and chocolate chips into protein-packed snack balls.",
    steps: [
      "Combine oats, peanut butter, honey, and chocolate chips in a bowl.",
      "Stir until everything is well mixed.",
      "Refrigerate the mixture for 30 minutes to firm up.",
      "Roll tablespoon-sized portions between your palms into balls.",
      "Place on a lined baking sheet.",
      "Refrigerate for another 30 minutes before eating.",
      "Store in an airtight container in the fridge for up to a week."
    ],
    tips: "Swap peanut butter for sunflower seed butter for a nut-free version. Add desiccated coconut or dried cranberries."
  },
  {
    id: 19, title: "Homemade Butter", category: "cooking", emoji: "🧈",
    ages: "4–12", time: "20 min", difficulty: "easy",
    supplies: ["1 cup heavy whipping cream (room temperature)", "A jar with a tight lid", "Pinch of salt", "Crackers to taste it on"],
    description: "Shake cream in a jar until it magically turns into butter  - science and snack in one.",
    steps: [
      "Pour cream into the jar, filling it about halfway.",
      "Add a pinch of salt and seal the lid tightly.",
      "Shake the jar hard. Take turns  - it takes about 10–15 minutes of shaking.",
      "First it will become whipped cream, then start to look chunky.",
      "Keep shaking until a solid yellow lump forms and separates from the liquid.",
      "That liquid is buttermilk  - save it for pancakes!",
      "Rinse the butter blob with cold water and press it a few times to remove leftover buttermilk.",
      "Spread on crackers and taste it!"
    ],
    tips: "Marble-sized balls in the jar will speed up the process by helping churn the cream."
  },
  {
    id: 20, title: "Ants on a Log", category: "cooking", emoji: "🐜",
    ages: "3–8", time: "10 min", difficulty: "easy",
    supplies: ["Celery stalks", "Peanut butter or cream cheese", "Raisins or dried cranberries"],
    description: "A classic no-cook snack that kids can assemble entirely themselves.",
    steps: [
      "Wash and dry the celery.",
      "Cut stalks into 3–4 sections (the 'logs').",
      "Spread peanut butter or cream cheese into the hollow groove of each piece.",
      "Press raisins or dried cranberries into the filling in a row  - those are your ants!",
      "Serve immediately."
    ],
    tips: "Try sunflower seeds, chocolate chips, or mini M&Ms as the 'ants' for variety."
  },
  {
    id: 21, title: "Banana Nice Cream", category: "cooking", emoji: "🍦",
    ages: "4–12", time: "10 min + freeze time", difficulty: "easy",
    supplies: ["3–4 ripe bananas", "Optional mix-ins: peanut butter, cocoa powder, berries, vanilla", "Blender or food processor", "Freezer container"],
    description: "Blend frozen bananas into a creamy one-ingredient ice cream  - no dairy, no sugar added.",
    steps: [
      "Peel and slice ripe bananas.",
      "Freeze in a single layer on a tray for at least 2 hours, or overnight.",
      "Break up the frozen banana and add to a blender.",
      "Blend, stopping to scrape the sides, until completely smooth and creamy.",
      "Add any mix-ins and blend briefly.",
      "Eat immediately for a soft-serve texture, or freeze another hour for a firmer scoop."
    ],
    tips: "The riper the banana (lots of spots), the sweeter and creamier the result."
  },
  {
    id: 22, title: "Homemade Lemonade", category: "cooking", emoji: "🍋",
    ages: "4–12", time: "15 min", difficulty: "easy",
    supplies: ["6 lemons", "½ cup sugar", "4 cups cold water", "Citrus juicer", "Pitcher"],
    description: "Squeeze, stir, and taste your way to the perfect glass of lemonade.",
    steps: [
      "Make simple syrup: stir sugar and ½ cup water in a small saucepan over medium heat until sugar dissolves. Cool.",
      "Roll lemons firmly on the counter to loosen the juice, then cut in half.",
      "Squeeze all the lemons using the juicer.",
      "Pour juice into a pitcher with the cooled syrup and remaining 3.5 cups of water.",
      "Stir, taste, and adjust  - more sugar, more lemon, or more water.",
      "Serve over ice."
    ],
    tips: "Make strawberry or lavender lemonade by blending in a handful of strawberries or adding dried lavender to the syrup."
  },
  {
    id: 23, title: "Yogurt Parfait", category: "cooking", emoji: "🫙",
    ages: "3–8", time: "10 min", difficulty: "easy",
    supplies: ["Greek yogurt", "Granola", "Fresh or frozen berries", "Honey", "Tall glasses or bowls"],
    description: "Layer yogurt, granola, and fruit into a tall glass for a beautiful breakfast or snack.",
    steps: [
      "Spoon a layer of yogurt into the bottom of the glass.",
      "Add a layer of granola.",
      "Add a layer of fruit.",
      "Repeat layers until the glass is full.",
      "Drizzle honey over the top.",
      "Add one final piece of fruit for decoration."
    ],
    tips: "This is a great 'cook in charge' activity  - kids assemble it completely independently."
  },
  {
    id: 24, title: "Cinnamon Toast Stars", category: "cooking", emoji: "⭐",
    ages: "3–8", time: "15 min", difficulty: "easy",
    supplies: ["Bread", "Butter", "Cinnamon sugar (1 tbsp sugar + 1 tsp cinnamon)", "Star-shaped cookie cutter", "Toaster or oven"],
    description: "Cut toast into stars, butter them, and dust with cinnamon sugar for a magical snack.",
    steps: [
      "Toast the bread until lightly golden.",
      "Butter while warm.",
      "Mix cinnamon and sugar together in a small bowl.",
      "Use the cookie cutter to press a star shape from each piece of toast.",
      "Sprinkle cinnamon sugar over the stars.",
      "Eat the stars and the scraps!"
    ],
    tips: "Use holiday cookie cutters to match the season. The offcuts are great dipped in jam."
  },

  // ── OUTDOOR ─────────────────────────────────────────────────────────────
  {
    id: 25, title: "Backyard Scavenger Hunt", category: "outdoor", emoji: "🔍",
    ages: "3–10", time: "30–45 min", difficulty: "easy",
    supplies: ["Printed or hand-drawn checklist", "Small bag or bucket to collect items"],
    description: "Hunt for items in the backyard or neighbourhood using a checklist.",
    steps: [
      "Write or draw a list of 10–15 things to find: a red leaf, something smooth, a feather, a round rock, a spider web, something that smells nice.",
      "Give each child a list and a bag.",
      "Set a time limit and boundaries.",
      "Hunt for everything on the list.",
      "Reconvene and compare finds.",
      "Award a 'nature expert' certificate for finding everything!"
    ],
    tips: "Make it harder for older kids by adding descriptions instead of names: 'something that blows in the wind', 'evidence an animal lives here'."
  },
  {
    id: 26, title: "Sidewalk Chalk Art Gallery", category: "outdoor", emoji: "🎨",
    ages: "3–12", time: "1 hr", difficulty: "easy",
    supplies: ["Chunky sidewalk chalk in multiple colours", "A driveway or path", "Water and a brush (optional)"],
    description: "Turn the driveway into an art gallery  - life-sized drawings, murals, and games.",
    steps: [
      "Decide on a theme: underwater world, outer space, jungle, city.",
      "Divide the driveway into sections for each artist.",
      "Draw and colour freely.",
      "Try a life-sized outline: lie down and trace around someone's whole body.",
      "Add hopscotch or a board game grid.",
      "Take photos before the rain washes it away."
    ],
    tips: "Dip chalk in water before drawing for more vivid, paint-like colours."
  },
  {
    id: 27, title: "Bug Hunt & Field Journal", category: "outdoor", emoji: "🐛",
    ages: "4–10", time: "45 min", difficulty: "easy",
    supplies: ["Magnifying glass", "Bug catcher or jar with air holes", "Notebook and pencil", "Field guide app (optional)"],
    description: "Hunt for insects and other tiny creatures, sketch them, and log where you found them.",
    steps: [
      "Choose a search area  - under rocks, in leaf piles, on plants, in soil.",
      "Gently lift rocks and logs to peek underneath.",
      "Catch a bug safely in a jar for a closer look.",
      "Sketch it in the notebook and write down its colours, number of legs, and where you found it.",
      "Try to identify it with a book or app.",
      "Carefully release it exactly where you found it."
    ],
    tips: "The best time is after rain when bugs are more active. Always replace any rocks or logs you move."
  },
  {
    id: 28, title: "Backyard Obstacle Course", category: "outdoor", emoji: "🏅",
    ages: "4–12", time: "45 min", difficulty: "medium",
    supplies: ["Hula hoops", "Cones or markers", "Jump rope", "Bucket and balls", "Pool noodles", "Chalk for lines"],
    description: "Design and run an obstacle course  - then challenge each other to beat the record time.",
    steps: [
      "Plan the course on paper first: crawl, jump, balance, throw.",
      "Set up each station: hop through hoops, balance-walk a chalk line, crawl under a noodle, throw three balls in a bucket.",
      "Do a practice run to make sure each obstacle is safe and possible.",
      "Time each other with a stopwatch.",
      "Adjust difficulty: add more hops, narrow the balance beam, move the bucket further.",
      "Award a gold medal for the fastest time."
    ],
    tips: "Let kids help design stations  - they'll make it harder than you would!"
  },
  {
    id: 29, title: "Mud Kitchen", category: "outdoor", emoji: "🪣",
    ages: "2–7", time: "Open-ended", difficulty: "easy",
    supplies: ["Old pots, pans, spoons", "Water", "Dirt patch or sand", "Flowers, leaves, sticks for garnish", "Old kitchen tools"],
    description: "Set up an outdoor mud kitchen for hours of imaginative cooking play.",
    steps: [
      "Find a patch of dirt or set up a tray of soil.",
      "Set out old pots, pans, bowls, and utensils  - the older the better.",
      "Add water gradually to make different textures of mud.",
      "Collect flowers, leaves, pebbles, and sticks for ingredients and garnish.",
      "Get cooking: mud soup, leaf salad, stone stew  - anything goes.",
      "Display finished dishes on a shelf or step for a mud restaurant."
    ],
    tips: "Old clothes or a painting smock are a must. This is one of the best open-ended play activities there is."
  },
  {
    id: 30, title: "Pinecone Bird Feeder", category: "outdoor", emoji: "🐦",
    ages: "4–10", time: "20 min", difficulty: "easy",
    supplies: ["Large pinecones", "Peanut butter or shortening", "Birdseed", "Twine", "Tray for rolling"],
    description: "Roll pinecones in peanut butter and birdseed to make a feeder for backyard birds.",
    steps: [
      "Tie a length of twine tightly around the top of each pinecone.",
      "Spread peanut butter generously over the whole pinecone, pushing it into the gaps.",
      "Pour birdseed onto a tray.",
      "Roll the coated pinecone through the seed, pressing so seeds stick all over.",
      "Hang from a tree branch and wait for visitors."
    ],
    tips: "Hang near a window for easy bird watching. Keep a notebook nearby to log which birds you see."
  },
  {
    id: 31, title: "Fairy Garden", category: "outdoor", emoji: "🧚",
    ages: "4–10", time: "1 hr", difficulty: "medium",
    supplies: ["Shallow pot or garden bed section", "Potting soil", "Small plants or succulents", "Pebbles, shells, twigs", "Mini figurines or toys", "Small mirror (for a pond)"],
    description: "Build a miniature garden world with tiny paths, a pond, and a home for fairies.",
    steps: [
      "Fill a pot or section of garden with soil.",
      "Plant small plants or succulents  - these are the trees.",
      "Lay a small mirror flat in the soil as a fairy pond.",
      "Create a pebble path leading to the mirror.",
      "Build a small house from sticks, bark, and leaves.",
      "Add a gate from two twigs and a piece of string.",
      "Place tiny figurines or animals in the garden.",
      "Water your plants and tend to your garden over time."
    ],
    tips: "A cat litter tray works perfectly as a contained fairy garden for inside if needed."
  },
  {
    id: 32, title: "Cloud Watching & Journaling", category: "outdoor", emoji: "☁️",
    ages: "4–12", time: "20–40 min", difficulty: "easy",
    supplies: ["Blanket", "Notebook and pencils or crayons", "Cloud identification chart (printed)"],
    description: "Lie on the grass and find shapes in clouds, then draw and name what you see.",
    steps: [
      "Lay a blanket on the grass and lie down.",
      "Look up and let your eyes relax.",
      "Call out what shapes you see in the clouds.",
      "Draw each cloud formation in the notebook.",
      "Write or dictate what you thought it looked like.",
      "Use the cloud chart to learn the actual weather name: cumulus, stratus, cirrus.",
      "Note the weather and whether it changed."
    ],
    tips: "Do this a few times and keep the journal going  - patterns will emerge over weeks."
  },
  {
    id: 33, title: "Leaf Rubbings", category: "outdoor", emoji: "🍁",
    ages: "3–8", time: "20 min", difficulty: "easy",
    supplies: ["Collected leaves of different shapes and sizes", "White paper", "Unwrapped crayons", "Tape"],
    description: "Place leaves under paper and rub crayons over them to reveal the hidden pattern.",
    steps: [
      "Collect a variety of leaves from outside.",
      "Place a leaf vein-side up on a flat surface.",
      "Tape a piece of paper over the top to stop it slipping.",
      "Rub the side of an unwrapped crayon firmly back and forth across the paper.",
      "The leaf's shape and veins will appear.",
      "Use different colours on the same leaf for a layered effect.",
      "Label each leaf with its tree name."
    ],
    tips: "Use multiple colours of crayon on one leaf for a beautiful effect. Press all your leaves in a book to keep them flat first."
  },
  {
    id: 34, title: "Backyard Garden Planting", category: "outdoor", emoji: "🌱",
    ages: "3–12", time: "1 hr", difficulty: "medium",
    supplies: ["Seeds or seedlings: tomatoes, sunflowers, herbs, beans", "Pots or garden bed", "Potting mix", "Watering can", "Plant markers"],
    description: "Plant seeds and watch them grow over weeks  - sunflowers, herbs, or veggies all work well.",
    steps: [
      "Choose what to grow  - beans and sunflowers are fast and satisfying for kids.",
      "Fill pots with potting mix.",
      "Make a small hole with your finger for each seed.",
      "Drop in one or two seeds and cover gently.",
      "Water lightly  - just until the soil is damp.",
      "Write the plant name and date on a marker and stick it in the pot.",
      "Place in a sunny spot and water regularly.",
      "Keep a growing journal with drawings and measurements."
    ],
    tips: "Bean seeds sprout in just 5–7 days, giving kids quick feedback. Grow cress on a damp cotton ball for same-day results."
  },
  {
    id: 35, title: "Water Balloon Olympics", category: "outdoor", emoji: "💦",
    ages: "4–12", time: "1 hr", difficulty: "easy",
    supplies: ["Water balloons (fill ahead of time or use quick-fill sets)", "Towels", "Buckets or tubs", "Sponges (optional)"],
    description: "A series of fun water challenges  - toss, balance, relay, and target throw.",
    steps: [
      "Fill a big bucket of water balloons.",
      "Event 1: Partner toss  - take a step back after each successful catch.",
      "Event 2: Target throw  - draw a circle with chalk, see who can hit it.",
      "Event 3: Relay race  - carry a water balloon on a spoon.",
      "Event 4: Balance race  - balance a balloon on your head or between your knees.",
      "Tally points and award a champion.",
      "Finish with a free-for-all!"
    ],
    tips: "Use reusable water balloons if possible to avoid the clean-up mess."
  },
  {
    id: 36, title: "Nature Weaving", category: "outdoor", emoji: "🌿",
    ages: "5–12", time: "40 min", difficulty: "medium",
    supplies: ["Two forked sticks or a frame made from four sticks tied together", "String or yarn", "Collected items: grass, leaves, flowers, feathers, thin twigs"],
    description: "Stretch yarn across a stick frame and weave natural materials through it to make wall art.",
    steps: [
      "Tie four sticks together in a rectangle, or find a naturally forked branch.",
      "Tie a length of yarn from side to side, leaving finger-width gaps between rows.",
      "Weave collected items in and out of the yarn rows.",
      "Mix colours and textures  - leaves, grass, flowers, thin stems.",
      "Fill the frame as tightly or loosely as you like.",
      "Tie a string to the top to hang it up."
    ],
    tips: "This works beautifully with Autumn colours. Hang outside to let it gradually decompose naturally."
  },

  // ── SCIENCE & EXPERIMENTS ───────────────────────────────────────────────
  {
    id: 37, title: "Baking Soda Volcano", category: "science", emoji: "🌋",
    ages: "3–10", time: "30 min", difficulty: "easy",
    supplies: ["Baking soda", "White vinegar", "Red food colouring", "Washing-up liquid", "Play dough or clay (optional, for the volcano shape)", "Tray"],
    description: "The classic eruption experiment  - watch the chemical reaction foam and overflow.",
    steps: [
      "Build a volcano shape from play dough or clay around a small cup or bottle on a tray.",
      "Add 2 tablespoons of baking soda to the cup inside.",
      "Add a squeeze of washing-up liquid and a few drops of red food colouring.",
      "When ready to erupt, pour in a splash of white vinegar.",
      "Watch it foam over the sides!",
      "Reload with more baking soda and vinegar for multiple eruptions.",
      "Discuss: the gas produced is carbon dioxide  - the same gas in fizzy drinks."
    ],
    tips: "Add more vinegar slowly for a slower, more lava-like flow. Try orange food colouring instead of red."
  },
  {
    id: 38, title: "DIY Slime", category: "science", emoji: "🟢",
    ages: "5–12", time: "20 min", difficulty: "medium",
    supplies: ["White school glue (120ml)", "Saline contact lens solution", "Baking soda", "Food colouring", "Glitter (optional)", "Bowl and spoon"],
    description: "Make stretchy, satisfying slime using glue and a saline activator.",
    steps: [
      "Pour glue into a bowl and add food colouring and glitter.",
      "Add ½ teaspoon of baking soda and stir well.",
      "Add saline solution one tablespoon at a time, stirring after each addition.",
      "Once it starts to pull away from the bowl, knead with your hands.",
      "Keep kneading until it's no longer sticky  - add tiny bits more saline if needed.",
      "Store in an airtight container."
    ],
    tips: "Less saline = stickier slime. More saline = firmer slime. The baking soda is what helps it come together properly."
  },
  {
    id: 39, title: "Rainbow Density Tower", category: "science", emoji: "🌈",
    ages: "5–12", time: "30 min", difficulty: "medium",
    supplies: ["Tall glass or cylinder", "Honey", "Corn syrup", "Washing-up liquid", "Water (tinted blue)", "Vegetable oil", "Food colouring", "Small objects to drop in"],
    description: "Layer different liquids to create a rainbow column  - they won't mix because of density differences.",
    steps: [
      "Pour honey slowly down the side of the glass first.",
      "Carefully add corn syrup on top.",
      "Add dish soap.",
      "Add blue-tinted water very slowly and gently.",
      "Add vegetable oil.",
      "Each layer should sit clearly above the last.",
      "Gently drop small objects and watch each one sink to the layer that matches its density.",
      "Try a grape, a cork, a coin, a small plastic toy."
    ],
    tips: "Pour each layer over the back of a spoon to keep the layers clean and separate."
  },
  {
    id: 40, title: "Grow Sugar Crystals", category: "science", emoji: "💎",
    ages: "6–12", time: "30 min + 3–7 days growing", difficulty: "medium",
    supplies: ["2 cups sugar", "1 cup water", "Saucepan", "Jar", "String or a wooden skewer", "Clothespeg or pencil"],
    description: "Dissolve sugar in hot water, then watch crystals slowly grow on a string over several days.",
    steps: [
      "Boil water in a saucepan, then dissolve sugar in it  - keep adding until no more will dissolve.",
      "Let the solution cool for 10 minutes, then pour into a clean jar.",
      "Tie string to a pencil or skewer laid across the top of the jar so the string hangs down into the liquid without touching the sides.",
      "Move the jar somewhere undisturbed.",
      "Check daily  - crystals will begin forming within 24–48 hours.",
      "After 3–7 days, pull out your rock candy and let it dry.",
      "It's edible! Taste it."
    ],
    tips: "Wet the string and roll it in sugar before putting it in the jar  - this gives crystals a starting point."
  },
  {
    id: 41, title: "Milk Swirl Science", category: "science", emoji: "🥛",
    ages: "3–10", time: "15 min", difficulty: "easy",
    supplies: ["Full-fat milk", "Food colouring (4 colours)", "Washing-up liquid", "Cotton swab", "Shallow dish"],
    description: "Drop food colouring into milk, touch it with soapy water, and watch an explosion of colour.",
    steps: [
      "Pour milk into a shallow dish to cover the bottom.",
      "Add drops of food colouring around the dish  - different colours, don't stir.",
      "Dip a cotton swab in washing-up liquid.",
      "Touch the tip gently to the surface of the milk near a drop of colour.",
      "Watch the colours swirl and explode outward!",
      "Try touching different spots.",
      "Discuss why it happens: soap breaks down the fat in milk, creating movement."
    ],
    tips: "This works with full-fat milk only  - the fat is what reacts with the soap. Skim milk barely reacts."
  },
  {
    id: 42, title: "Oobleck", category: "science", emoji: "🫧",
    ages: "3–10", time: "15 min", difficulty: "easy",
    supplies: ["2 cups cornstarch", "1 cup water", "Food colouring", "Large tray or bowl"],
    description: "Make a non-Newtonian fluid that acts like a solid when you squeeze it and a liquid when you let go.",
    steps: [
      "Add food colouring to water in a large bowl.",
      "Slowly add cornstarch, stirring as you go.",
      "Stop adding when the mixture feels weird  - it should resist a fast stir but pour slowly.",
      "Try punching it  - your fist will bounce off. Then open your hand and let it ooze through.",
      "Roll some into a ball fast  - it holds. Then stop rolling  - it melts.",
      "This is a non-Newtonian fluid. It behaves like a liquid under no pressure and a solid under pressure."
    ],
    tips: "Make it on a tray for containment. It washes off easily with water. Add more cornstarch if too runny."
  },
  {
    id: 43, title: "Invisible Ink Messages", category: "science", emoji: "🕵️",
    ages: "5–12", time: "20 min", difficulty: "easy",
    supplies: ["Lemon juice", "Water", "Cotton swab or thin paintbrush", "White paper", "Heat source: lamp or toaster (adult supervised)"],
    description: "Write secret messages with lemon juice that only appear when heated.",
    steps: [
      "Mix lemon juice with a little water in a small bowl.",
      "Dip the cotton swab into the mixture.",
      "Write a message or draw a picture on white paper.",
      "Let it dry completely  - it will be invisible.",
      "Give the paper to someone to decode.",
      "To reveal: hold the paper close to a warm lightbulb or pass over a toaster (adult supervised).",
      "The message will slowly appear brown as the lemon juice oxidises."
    ],
    tips: "Write a treasure map in invisible ink for an extra-fun scavenger hunt."
  },
  {
    id: 44, title: "Paper Bridge Challenge", category: "science", emoji: "🌉",
    ages: "6–12", time: "45 min", difficulty: "hard",
    supplies: ["Several sheets of paper per person", "Scissors", "Tape", "Coins or weights to test load"],
    description: "Each person builds a bridge from paper only  - then test who holds the most weight.",
    steps: [
      "Give each builder 5 sheets of paper, scissors, and tape.",
      "Challenge: build a bridge that spans at least 20cm and holds coins.",
      "Allow 20 minutes of planning and building.",
      "Test each bridge by stacking coins in the middle one at a time.",
      "Count the coins before it collapses.",
      "Compare designs  - which shapes were strongest? (Arches, triangles, corrugated folds.)",
      "Rebuild using what you learned and test again."
    ],
    tips: "Folding paper into a corrugated (accordion) pattern dramatically increases its strength. Try to guide kids to discover this."
  },
  {
    id: 45, title: "Seed Germination Observation Jar", category: "science", emoji: "🌾",
    ages: "4–10", time: "20 min + daily observation", difficulty: "easy",
    supplies: ["Clear glass or jar", "Paper towels", "Bean or pea seeds", "Water", "Notebook to record observations"],
    description: "Press seeds against a glass jar to watch roots and shoots emerge over several days.",
    steps: [
      "Scrunch a paper towel and stuff it into a clear jar.",
      "Press 3–4 seeds between the towel and the glass so they're visible from outside.",
      "Pour a little water into the jar to keep the paper towel damp.",
      "Place on a windowsill.",
      "Check daily and draw what you see in a notebook.",
      "Water every other day to keep it damp but not soaking.",
      "Watch roots grow down and the shoot push up toward the light."
    ],
    tips: "Once they've sprouted well, plant them in soil to grow on. Bean seeds work in about 5 days."
  },
  {
    id: 46, title: "Egg Drop Challenge", category: "science", emoji: "🥚",
    ages: "7–12", time: "1 hr", difficulty: "hard",
    supplies: ["1 raw egg per team", "Straws, tape, rubber bands, bubble wrap, cotton balls, plastic bags, popsicle sticks", "A high-up drop point (upper floor window or deck)"],
    description: "Build a structure to protect an egg from a high drop  - only the structure can break.",
    steps: [
      "Give each team an egg and the same set of materials.",
      "Allow 30 minutes to design and build a protective casing.",
      "The structure must weigh as little as possible while protecting the egg.",
      "Take turns dropping from the same height.",
      "Inspect eggs for cracks.",
      "Discuss what worked: cushioning, weight distribution, crumple zones."
    ],
    tips: "Start from a lower height and increase. This teaches iteration  - fix what failed and try again."
  },

  // ── GAMES & PLAY ────────────────────────────────────────────────────────
  {
    id: 47, title: "Treasure Hunt with Clues", category: "games", emoji: "🗺️",
    ages: "4–12", time: "1 hr", difficulty: "medium",
    supplies: ["Clue cards (written or drawn)", "A hidden 'treasure' (small toy, treat, or activity)", "Pencil"],
    description: "Write a chain of clues leading from one hiding spot to the next, ending at a surprise.",
    steps: [
      "Decide on 6–8 hiding spots around the house or yard.",
      "Write a clue for each spot that points to the next one.",
      "Hide each clue at the location it describes.",
      "Put the final treasure at the last location.",
      "Give hunters the first clue and let them go.",
      "For young kids, use pictures instead of words for clues."
    ],
    tips: "Make riddle clues harder for older kids: 'I keep things cool and things you eat, look inside me for your treat.' For younger kids: draw pictures of each location."
  },
  {
    id: 48, title: "Freeze Dance Party", category: "games", emoji: "🕺",
    ages: "2–10", time: "20–30 min", difficulty: "easy",
    supplies: ["Music player", "Space to move"],
    description: "Dance wildly when music plays, freeze in a statue pose when it stops.",
    steps: [
      "Clear a space in the living room.",
      "Explain the rules: dance while music plays, freeze completely still when it stops.",
      "One person controls the music and pauses it at random.",
      "Anyone who moves after the music stops is out (or just laughed at!).",
      "Last dancer standing wins and gets to control the music next.",
      "Play with themes: freeze like a robot, freeze like an animal."
    ],
    tips: "Skip the elimination version with young kids  - everyone keeps dancing regardless. Focus on silly freezing poses."
  },
  {
    id: 49, title: "Shadow Puppet Theatre", category: "games", emoji: "🎪",
    ages: "4–10", time: "30–45 min", difficulty: "easy",
    supplies: ["Torch or lamp", "White sheet or blank wall", "Hands"],
    description: "Create animals and characters using your hands and a light source  - then put on a show.",
    steps: [
      "Hang a white sheet or find a blank pale wall.",
      "Darken the room and shine a strong torch toward the sheet.",
      "Stand between the light and the sheet.",
      "Practice hand shapes: dog, bird, rabbit, butterfly, crocodile.",
      "Make up a story and perform it using the puppets.",
      "Take turns being the audience."
    ],
    tips: "Look up hand shadow guides online to learn more shapes. Cardboard cut-out characters on sticks work great too."
  },
  {
    id: 50, title: "Blanket Fort City", category: "games", emoji: "🏕️",
    ages: "3–10", time: "45 min–open-ended", difficulty: "medium",
    supplies: ["Blankets, sheets, duvets", "Chairs, cushions, couch", "Clothes pegs", "Fairy lights (optional)", "Pillows"],
    description: "Build the ultimate blanket fort and spend time inside it reading, playing, or watching a movie.",
    steps: [
      "Plan the fort: how big? One room or multi-room? Secret entrance?",
      "Drape blankets over chairs and the couch to form walls and a roof.",
      "Use clothes pegs to hold everything in place.",
      "Build up layers for a sturdy structure.",
      "Add fairy lights inside for atmosphere.",
      "Furnish with pillows, soft toys, and snacks.",
      "Declare it complete and move in."
    ],
    tips: "Make rules: no adults without knocking. Add a password for the entrance."
  },
  {
    id: 51, title: "Indoor Bowling", category: "games", emoji: "🎳",
    ages: "3–8", time: "30 min", difficulty: "easy",
    supplies: ["10 empty plastic bottles or toilet rolls", "A soft ball or rolled-up sock", "Tape for a lane"],
    description: "Set up a bowling lane in the hallway using bottles and a soft ball.",
    steps: [
      "Arrange 10 bottles or rolls in a triangle at one end of the hallway.",
      "Mark a throwing line with tape.",
      "Take turns rolling the ball.",
      "Count how many knocked down per turn.",
      "Keep score on paper.",
      "Give each player 2 rolls per frame.",
      "10 frames makes a full game."
    ],
    tips: "Put a little rice or sand in each bottle so they don't blow over between turns."
  },
  {
    id: 52, title: "Charades for Kids", category: "games", emoji: "🎬",
    ages: "5–12", time: "30 min", difficulty: "easy",
    supplies: ["Slips of paper with actions, animals, or movie titles", "Bowl or hat", "Timer"],
    description: "Act out words silently while others guess  - no talking allowed.",
    steps: [
      "Write simple prompts on slips of paper (animals, foods, actions, characters) and put in a bowl.",
      "Split into two teams.",
      "One person draws a slip and acts it out silently  - no mouthing words.",
      "Their team has 60 seconds to guess.",
      "If they guess correctly before time runs out, that team gets a point.",
      "Take turns until everyone has had a go.",
      "Most points wins."
    ],
    tips: "For younger kids, use only animal categories. For older kids add movies, songs, and books."
  },
  {
    id: 53, title: "The Floor is Lava", category: "games", emoji: "🔥",
    ages: "3–10", time: "20–30 min", difficulty: "easy",
    supplies: ["Cushions, pillows, books, pieces of cardboard", "Living room furniture"],
    description: "The floor has turned to lava  - use cushions and furniture to get across without touching it.",
    steps: [
      "Call out 'THE FLOOR IS LAVA!' suddenly.",
      "Everyone has 5 seconds to get off the floor.",
      "Scatter cushions and pillows as stepping stones.",
      "Create challenges: get from the couch to the kitchen without touching the floor.",
      "If you touch the lava, you're out  - or you have to sit on a lava island and be rescued.",
      "Set a mission: retrieve a toy from across the room using only stepping stones."
    ],
    tips: "This is much better as a sudden surprise game than a planned one. Call it out when least expected!"
  },
  {
    id: 54, title: "Telephone Pictionary", category: "games", emoji: "📝",
    ages: "6–12", time: "30 min", difficulty: "easy",
    supplies: ["A stack of small papers per player", "Pencils"],
    description: "Combine Telephone and Pictionary  - write a phrase, pass it, someone draws it, the next person guesses what the drawing is, and so on.",
    steps: [
      "Give each player a stack of papers and a pencil.",
      "Everyone writes a phrase on the top paper (e.g. 'a cat eating pizza').",
      "Pass the stack to the left.",
      "The next person reads the phrase, hides it, and draws it on the next paper.",
      "Pass again. The next person looks only at the drawing and writes what they think it is.",
      "Keep alternating draw/write until the stack returns to the original writer.",
      "Read out the chain from start to finish  - usually hilarious."
    ],
    tips: "The more players the better. Works brilliantly with 5+ people."
  },
  {
    id: 55, title: "Balloon Tennis", category: "games", emoji: "🎾",
    ages: "3–8", time: "20 min", difficulty: "easy",
    supplies: ["Balloons", "Paper plates on sticks (or just hands)", "A 'net' made from string or tape on the floor"],
    description: "Hit a balloon back and forth over an imaginary net  - keep it in the air as long as possible.",
    steps: [
      "Blow up 2–3 balloons.",
      "Make rackets by taping a wide popsicle stick or ruler to a paper plate.",
      "Stretch a piece of string low between two chairs as the net, or use a tape line on the floor.",
      "Hit the balloon back and forth.",
      "Count consecutive hits as a team record and try to beat it.",
      "For a competition: a point is scored when the balloon hits the floor on the other side."
    ],
    tips: "Balloons are slow enough for toddlers but surprisingly challenging. Try keeping two balloons up at once."
  },
  {
    id: 56, title: "Homemade Board Game", category: "games", emoji: "🎲",
    ages: "6–12", time: "1–2 hrs to make, then play", difficulty: "medium",
    supplies: ["Large cardboard", "Markers", "Dice", "Small toys or buttons as playing pieces", "Index cards"],
    description: "Design and build your own board game from scratch, then play it.",
    steps: [
      "Decide on a theme: jungle adventure, space race, underwater treasure hunt.",
      "Draw a winding path of squares on the cardboard.",
      "Add special squares: 'skip a turn', 'move forward 3', 'swap places', 'go back to start'.",
      "Write challenge cards: 'do 10 star jumps', 'say the alphabet backwards', 'answer a trivia question'.",
      "Decorate the board with artwork.",
      "Write the rules down.",
      "Play it with the family  - and adjust rules that don't work well."
    ],
    tips: "The fact that they made it makes even a simple game special. Keep it and play it again."
  },

  // ── ART ─────────────────────────────────────────────────────────────────
  {
    id: 57, title: "Watercolour Painting", category: "art", emoji: "🖌️",
    ages: "3–12", time: "30–45 min", difficulty: "easy",
    supplies: ["Watercolour paints", "Brushes (several sizes)", "Watercolour paper or thick paper", "Water jar", "Paper towels"],
    description: "Explore watercolour techniques: wet-on-wet, dry brush, salt textures, and resist.",
    steps: [
      "Wet the paper all over with clean water for a soft, blending effect (wet-on-wet technique).",
      "Drop in colours and watch them bleed and blend together.",
      "Let dry and then paint details on top.",
      "Try salt: sprinkle table salt onto wet paint and watch the texture that forms as it dries.",
      "Try resist: draw with a white wax candle before painting  - the wax repels the paint.",
      "Try dry brush: use almost-dry paint for a rough textured stroke."
    ],
    tips: "Expensive watercolour paper makes a huge difference  - it handles water without warping or tearing."
  },
  {
    id: 58, title: "Marble Painting", category: "art", emoji: "🔮",
    ages: "3–10", time: "20 min", difficulty: "easy",
    supplies: ["Marbles or small bouncy balls", "Paint in several colours", "Paper", "A tray with raised sides or a cardboard box lid"],
    description: "Roll paint-covered marbles around a tray to create swirling abstract prints.",
    steps: [
      "Cut paper to fit inside the tray or box lid.",
      "Drop small blobs of paint in different corners of the paper.",
      "Place 3–4 marbles into the tray.",
      "Tilt and move the tray so marbles roll through the paint.",
      "The marbles leave trails of colour across the paper.",
      "Remove marbles and let the print dry.",
      "Try two colours that blend nicely: blue and yellow, red and yellow."
    ],
    tips: "Use a shoebox lid for a perfectly-sized contained space. This makes beautiful wrapping paper."
  },
  {
    id: 59, title: "Hand & Footprint Art", category: "art", emoji: "✋",
    ages: "2–8", time: "30 min", difficulty: "easy",
    supplies: ["Washable paint", "Paper or canvas", "Brushes or sponges", "Markers for details", "Wet cloth for cleanup"],
    description: "Use handprints and footprints as the base for animals, trees, monsters, and more.",
    steps: [
      "Paint a child's hand or foot with a brush or press into a sponge pad.",
      "Press firmly onto paper.",
      "Lift carefully without smudging.",
      "Let dry.",
      "Turn the print into something with markers: a thumbprint = ladybug, full handprint = turkey, footprint = fish.",
      "Date it  - these are precious to look back on."
    ],
    tips: "Make a yearly handprint on the same date to watch hands grow over years."
  },
  {
    id: 60, title: "Salt Painting", category: "art", emoji: "🧂",
    ages: "4–10", time: "30 min + dry time", difficulty: "easy",
    supplies: ["White glue in a bottle (with nozzle)", "Table salt", "Watercolour paints", "Black cardboard", "Pipette or paintbrush"],
    description: "Squeeze glue into patterns, coat with salt, then drop watercolour paint that spreads like magic.",
    steps: [
      "Draw a pattern or picture by squeezing glue directly from the bottle onto black cardboard.",
      "Immediately pour salt over the entire design and shake off the excess.",
      "Allow the glue to dry completely (1–2 hours or overnight).",
      "Use a pipette or damp brush to drop small amounts of watercolour paint onto the salt.",
      "Watch the colour spread along the salt trail.",
      "Use multiple colours and watch them blend where they meet.",
      "Let dry fully."
    ],
    tips: "The slower and more gently you apply the watercolour, the further and more evenly it spreads."
  },
  {
    id: 61, title: "Tape Resist Art", category: "art", emoji: "📐",
    ages: "4–10", time: "45 min", difficulty: "easy",
    supplies: ["Masking tape or painter's tape", "Watercolour or acrylic paint", "Paper or canvas", "Brushes"],
    description: "Apply tape in a geometric pattern, paint over everything, then peel back to reveal crisp white lines.",
    steps: [
      "Press pieces of tape onto paper in any pattern  - stripes, triangles, a starry sky, abstract shapes.",
      "Press edges down firmly so paint won't bleed underneath.",
      "Paint over the entire surface with multiple colours.",
      "Let dry completely.",
      "Slowly peel back the tape to reveal the white lines underneath.",
      "The contrast is dramatic and always looks impressive."
    ],
    tips: "Paint each section a different colour for a stained-glass effect. Pulling the tape off is the best part  - do it slowly."
  },
  {
    id: 62, title: "Bubble Wrap Printing", category: "art", emoji: "🫧",
    ages: "3–8", time: "20 min", difficulty: "easy",
    supplies: ["Bubble wrap", "Washable paint", "Paper", "Roller or brush", "Scissors"],
    description: "Paint bubble wrap and press it onto paper to create texture prints  - circles everywhere!",
    steps: [
      "Cut bubble wrap into shapes: a circle for a sun, a rectangle for a tree trunk texture.",
      "Roll or brush paint onto the bumpy side of the bubble wrap.",
      "Press it firmly onto paper and lift straight up.",
      "Look at the pattern of circles left behind.",
      "Use different colours on different pieces.",
      "Try layering prints for a complex pattern."
    ],
    tips: "The small-bubble wrap makes the finest texture. Large bubble wrap makes bold dots perfect for spotty animals."
  },
  {
    id: 63, title: "Sponge Painting", category: "art", emoji: "🟡",
    ages: "3–8", time: "30 min", difficulty: "easy",
    supplies: ["Kitchen sponges", "Scissors", "Paint", "Paper", "Plates for paint"],
    description: "Cut sponges into shapes and use them to stamp repeating patterns.",
    steps: [
      "Cut sponges into simple shapes: stars, hearts, circles, triangles.",
      "Pour small amounts of paint onto plates.",
      "Dip a sponge shape into paint  - just enough to coat it.",
      "Press firmly onto paper and lift straight up.",
      "Reload with paint for each stamp.",
      "Create repeat patterns, borders, or a scene using different shapes.",
      "Mix colours on the page by overlapping stamps."
    ],
    tips: "Dampening the sponge slightly before painting gives a softer print. Dry sponges give a more textured, rough edge."
  },
  {
    id: 64, title: "Spin Art", category: "art", emoji: "🌀",
    ages: "4–10", time: "20 min", difficulty: "easy",
    supplies: ["A salad spinner", "Paper cut to fit inside the spinner", "Liquid paint in squeeze bottles"],
    description: "Drop paint into a spinning salad spinner for instant centrifuge art.",
    steps: [
      "Cut paper into a circle to fit the inside of a salad spinner.",
      "Place the paper in the bottom.",
      "Squeeze small amounts of paint from different colours onto the paper.",
      "Put the lid on and spin as fast as you can.",
      "Open and see the swirled pattern.",
      "Experiment with more paint, different colours, and spin speed."
    ],
    tips: "This is one of the most exciting moments in kids' art  - the reveal. Build anticipation before opening the lid."
  },
  {
    id: 65, title: "Self Portrait", category: "art", emoji: "🪞",
    ages: "4–12", time: "30–45 min", difficulty: "medium",
    supplies: ["Mirror", "Paper", "Pencils", "Coloured pencils, crayons or paint"],
    description: "Look carefully in a mirror and draw yourself  - every feature, colour, and expression.",
    steps: [
      "Set a mirror up in front of the artist.",
      "Look carefully at your face: the shape, eye colour, hair, freckles, smile.",
      "Start with a light pencil sketch  - oval for the head, lines for where eyes and nose sit.",
      "Draw each feature carefully, looking back at the mirror often.",
      "Add hair, eyebrows, and any distinguishing features.",
      "Add colour with pencils, crayons, or paint.",
      "Sign and date it."
    ],
    tips: "Keep self-portraits from year to year. It's fascinating to see how both the face and the drawing skill change."
  },
  {
    id: 66, title: "Collage Making", category: "art", emoji: "✂️",
    ages: "3–10", time: "45 min", difficulty: "easy",
    supplies: ["Old magazines, newspapers, wrapping paper", "Scissors", "Glue stick", "Background paper or cardboard"],
    description: "Cut and arrange magazine images into a scene, theme, or abstract composition.",
    steps: [
      "Choose a theme: animals, food, nature, a place you'd like to visit, a dream bedroom.",
      "Flip through magazines and cut out anything that fits your theme.",
      "Collect a big pile of cut pieces before starting to arrange.",
      "Play with arrangements on the background paper before gluing anything.",
      "Glue everything down once you're happy with the layout.",
      "Add drawings or writing to fill gaps."
    ],
    tips: "Cut letters out of headlines to make a word message in the collage."
  },

  // ── SENSORY PLAY ────────────────────────────────────────────────────────
  {
    id: 67, title: "Homemade Playdough", category: "sensory", emoji: "🫶",
    ages: "2–8", time: "20 min to make", difficulty: "easy",
    supplies: ["2 cups flour", "½ cup salt", "2 tbsp cream of tartar", "2 tbsp oil", "1.5 cups boiling water", "Food colouring"],
    description: "Make the softest, longest-lasting playdough from pantry staples  - then play with it.",
    steps: [
      "Mix flour, salt, and cream of tartar in a bowl.",
      "Add food colouring to the boiling water.",
      "Add oil and coloured water to the dry mixture.",
      "Stir quickly  - it will be lumpy at first.",
      "Once cool enough to handle, knead vigorously for 5 minutes until smooth.",
      "Store in an airtight container  - it keeps for months."
    ],
    tips: "Add glitter, essential oils, or dried herbs to the dough for texture and scent. Lavender dough is calming."
  },
  {
    id: 68, title: "Rainbow Rice Sensory Bin", category: "sensory", emoji: "🌈",
    ages: "1–6", time: "30 min to prep", difficulty: "easy",
    supplies: ["4 cups uncooked rice", "Rubbing alcohol or hand sanitizer", "Food colouring", "Zip-lock bags", "Large bin or tray", "Scoops, cups, funnels, small toys"],
    description: "Dye rice in rainbow colours and pour it into a bin for scooping, pouring, and hiding treasures.",
    steps: [
      "Put 1 cup rice in a zip-lock bag, add a splash of alcohol and a few drops of food colouring.",
      "Seal and shake until rice is fully coated.",
      "Spread on a tray to dry for 30 minutes.",
      "Repeat for each colour.",
      "Mix all colours in a large bin.",
      "Add scoops, funnels, small cups, and hidden toys.",
      "Let them play freely."
    ],
    tips: "Hide small figurines or letters in the rice for a seek-and-find element. Layer colours for a rainbow effect before mixing."
  },
  {
    id: 69, title: "Ice Excavation", category: "sensory", emoji: "🧊",
    ages: "2–8", time: "15 min to prep, open-ended play", difficulty: "easy",
    supplies: ["Water", "Toy figurines or gems to freeze inside", "Large container for freezing", "Pipettes, spray bottles, salt, warm water for melting", "Tray"],
    description: "Freeze toys inside a block of ice overnight, then excavate them using warm water and salt.",
    steps: [
      "Place small toys or gems in a container of water and freeze overnight.",
      "Place the ice block on a tray outside.",
      "Give children pipettes with warm water, spray bottles, and salt.",
      "They drip water and sprinkle salt to melt the ice and free the toys.",
      "Discuss how salt lowers the melting point of ice.",
      "The longer and more slowly they work, the more satisfying it is."
    ],
    tips: "Dinosaurs, gems, and tiny sea creatures are popular choices. Dye the water blue for an underwater effect."
  },
  {
    id: 70, title: "Cloud Dough", category: "sensory", emoji: "☁️",
    ages: "2–7", time: "10 min to make", difficulty: "easy",
    supplies: ["8 cups flour", "1 cup baby oil or vegetable oil", "Large tray or bin"],
    description: "Mix flour and oil to make a moulding material that crumbles and packs like wet sand.",
    steps: [
      "Pour flour into a large bin.",
      "Drizzle oil over the flour.",
      "Mix with hands until it resembles wet sand  - it should hold a shape when squeezed.",
      "Add more oil if it won't hold a shape, more flour if too oily.",
      "Mould into shapes, build with it, crumble it, sift it.",
      "Store in an airtight container for weeks."
    ],
    tips: "This is satisfying for all ages. Add food colouring to the oil before mixing for coloured cloud dough."
  },
  {
    id: 71, title: "Water Play Station", category: "sensory", emoji: "💧",
    ages: "1–6", time: "Open-ended", difficulty: "easy",
    supplies: ["Large tub or washing-up basin", "Warm water", "Measuring cups, spoons, funnels, sponges, ladles", "Food colouring (optional)", "Waterproof aprons or old clothes"],
    description: "Set up a water table with tools to pour, measure, sink, and float  - open-ended and messy.",
    steps: [
      "Fill a tub with warm water  - knee height for toddlers.",
      "Set out pouring tools: jugs, cups, spoons, funnels, squeeze bottles.",
      "Add objects to test: what sinks? What floats?",
      "Add a few drops of food colouring to make it visually interesting.",
      "Add a small amount of bubbles for extra fun.",
      "Let them pour, splash, and experiment freely.",
      "Extend with ice cubes to melt, or coloured water mixing."
    ],
    tips: "Do this outside in summer. Put a towel down around the tub for easy cleanup."
  },
  {
    id: 72, title: "Oobleck Sensory Play", category: "sensory", emoji: "🟢",
    ages: "2–8", time: "10 min to make", difficulty: "easy",
    supplies: ["2 cups cornstarch", "1 cup water", "Food colouring", "Tray with deep sides"],
    description: "Play with a non-Newtonian fluid that is solid when pressed and liquid when relaxed.",
    steps: [
      "Mix food colouring into water.",
      "Slowly stir water into cornstarch in a large tray.",
      "Don't over-stir  - scoop and fold instead.",
      "The texture is right when it feels hard when you punch it but oozes through your fingers when you open your hand.",
      "Run hands through it, make it drip, build it up, watch it melt.",
      "Let them explore freely for as long as they want.",
      "Dries completely for easy cleanup  - just sweep or vacuum."
    ],
    tips: "Lay a shower curtain or tarp underneath for easy cleanup. Cornstarch oobleck washes off easily with water."
  },
  {
    id: 73, title: "Gel Bag Sensory Squishies", category: "sensory", emoji: "🫙",
    ages: "0–4", time: "10 min", difficulty: "easy",
    supplies: ["Heavy-duty zip-lock freezer bag", "Hair gel", "Small colourful items: beads, sequins, foam shapes, glitter", "Strong tape"],
    description: "Seal gel and small objects in a bag to create a no-mess sensory squishy for babies and toddlers.",
    steps: [
      "Fill a zip-lock bag halfway with clear hair gel.",
      "Add small items: glitter, sequins, small plastic gems, foam shapes.",
      "Squeeze out as much air as possible.",
      "Seal the bag tightly.",
      "Reinforce the seal with several strips of strong packing tape.",
      "Let children squish, move objects around, and explore.",
      "Make several with different colours and contents."
    ],
    tips: "These are particularly good for babies who explore with their hands. Always supervise and check the seal before each use."
  },
  {
    id: 74, title: "Foam Soap Sensory Tray", category: "sensory", emoji: "🫧",
    ages: "2–6", time: "10 min", difficulty: "easy",
    supplies: ["Foam hand soap or shaving foam", "Food colouring", "Tray", "Spoons and cups", "Glitter (optional)"],
    description: "Squirt foam on a tray and add colour  - a cloud-like sensory base for scooping and shaping.",
    steps: [
      "Squirt a large pile of foam soap or shaving foam onto a tray.",
      "Drop food colouring onto different parts of the foam.",
      "Swirl lightly with a spoon  - too much swirling makes it grey.",
      "Provide scoops, cups, and utensils.",
      "Let children freely explore: scoop, pour, squeeze, draw patterns in it.",
      "Add glitter or plastic gems for treasure play."
    ],
    tips: "This wipes up easily and smells great. Do it at the kitchen table for easy cleanup  - foam doesn't stain most surfaces."
  },
  {
    id: 75, title: "Moon Sand", category: "sensory", emoji: "🌕",
    ages: "2–8", time: "10 min to make", difficulty: "easy",
    supplies: ["8 cups play sand or fine sand", "1 cup cornstarch", "½ cup water", "Large bin", "Moulds, scoops, small toys"],
    description: "Mix sand with cornstarch for a mouldable sand that holds shapes better than regular sand.",
    steps: [
      "Combine sand and cornstarch in a large bin.",
      "Gradually add water and mix with hands.",
      "The mixture should pack firmly when squeezed but crumble like dry sand otherwise.",
      "Pack into moulds and flip them out like sandcastles.",
      "Use cookie cutters, cups, and spoons as tools.",
      "Add small dinosaurs or vehicles for play scenes.",
      "Store covered to prevent drying out."
    ],
    tips: "Add a few drops of food colouring to the water for coloured moon sand. Perfect for indoor sandpit play."
  },
  {
    id: 76, title: "Kinetic Sand DIY", category: "sensory", emoji: "🏖️",
    ages: "3–10", time: "10 min to make", difficulty: "easy",
    supplies: ["2 cups fine sand", "1 tbsp cornstarch", "½ tsp dish soap", "¼ cup water", "Bowl"],
    description: "Make a flowing, mouldable sand substitute that sticks to itself and not to hands.",
    steps: [
      "Mix sand and cornstarch together in a bowl.",
      "Add dish soap to the water and stir.",
      "Pour the soapy water into the sand mixture.",
      "Mix with hands until a uniform texture forms.",
      "It should clump and mould but not be wet.",
      "Mould into shapes, cut with plastic tools, watch it flow.",
      "Store in an airtight container."
    ],
    tips: "This recipe is great but true kinetic sand is hard to replicate exactly at home  - expect a slightly different texture."
  },

  // ── LEARNING & EDUCATION ────────────────────────────────────────────────
  {
    id: 77, title: "Nature Journal", category: "learning", emoji: "📓",
    ages: "5–12", time: "Ongoing", difficulty: "easy",
    supplies: ["Blank or lined notebook", "Pencils, coloured pencils", "Magnifying glass", "Ruler"],
    description: "Keep an ongoing nature journal with observational drawings, measurements, and notes.",
    steps: [
      "Set up a journal: name and date on the inside cover.",
      "On each outing, find one thing to study closely: a leaf, a bug, a cloud, a flower.",
      "Draw it as carefully and accurately as possible.",
      "Label parts you know: petal, vein, wing.",
      "Write down where you found it, the weather, the date.",
      "Measure it and record the size.",
      "Return to the same spots over seasons to record how things change."
    ],
    tips: "This is a habit, not a one-time project. The journal becomes a treasure over years. Press leaves and flowers between pages."
  },
  {
    id: 78, title: "Maths with LEGO", category: "learning", emoji: "🧱",
    ages: "4–10", time: "30 min", difficulty: "easy",
    supplies: ["LEGO bricks in various sizes", "Paper and pencil"],
    description: "Use LEGO bricks to make maths physical and visual  - fractions, addition, multiplication, measurement.",
    steps: [
      "For addition: pick any two bricks and count the total studs.",
      "For multiplication: 4 bricks of 4 = how many studs total? Build it and count.",
      "For fractions: a 2x4 brick is 1 whole. How many 1x2 bricks equal it? Each is ½.",
      "For area: measure a flat plate in studs. Length x width = area.",
      "For height: build a tower, measure in bricks, convert to centimetres.",
      "Create story problems: 'You have 3 towers of 5. How many bricks is that?'"
    ],
    tips: "Let children come up with their own problems. The tactile, visual nature of LEGO makes abstract maths click."
  },
  {
    id: 79, title: "Alphabet Scavenger Hunt", category: "learning", emoji: "🔤",
    ages: "3–7", time: "20 min", difficulty: "easy",
    supplies: ["Paper with alphabet listed", "Pencil", "A house or backyard"],
    description: "Find one object starting with each letter of the alphabet around the house or yard.",
    steps: [
      "Print or write out the alphabet on paper.",
      "Go room by room and find something for each letter.",
      "Write or draw each item next to its letter.",
      "Tricky ones: X (box?), Q (quilt?), Z (zipper?).",
      "Take photos instead of writing for non-readers.",
      "See how quickly you can complete the whole alphabet."
    ],
    tips: "For younger children, focus on just 5–10 letters. For older ones, challenge them to find a different word for each letter than they did last time."
  },
  {
    id: 80, title: "Story Stones", category: "learning", emoji: "🪨",
    ages: "3–8", time: "45 min to make, open-ended play", difficulty: "easy",
    supplies: ["Smooth flat stones", "Acrylic paint", "Brushes", "Sealer", "A bag or box to store them in"],
    description: "Paint characters, places, and objects on stones, then use them to prompt storytelling.",
    steps: [
      "Paint each stone with a white base coat and let dry.",
      "Paint characters: a child, a grandma, a dragon, a wizard.",
      "Paint settings: a forest, a castle, a mountain, the sea.",
      "Paint objects: a key, a door, a boat, a star.",
      "Seal with varnish and let dry completely.",
      "To use: pull out 5 random stones and make up a story that includes all of them.",
      "Take turns adding to the story using the next stone."
    ],
    tips: "Simpler, bolder images work better than detailed ones on small stones. Use a black marker for outlines."
  },
  {
    id: 81, title: "DIY Jigsaw Puzzle", category: "learning", emoji: "🧩",
    ages: "4–10", time: "40 min", difficulty: "medium",
    supplies: ["A printed or drawn picture on thick paper or card", "Scissors", "Envelope or bag to store pieces"],
    description: "Draw or print a picture, cut it into pieces, and swap puzzles with someone else to solve.",
    steps: [
      "Draw a detailed picture on thick cardboard, or print and glue a photo.",
      "Flip it over and draw the puzzle piece shapes on the back.",
      "Cut out each piece carefully.",
      "Mix the pieces up and try to solve it yourself.",
      "Swap your puzzle with someone else's to solve.",
      "For more difficulty: cut into more pieces or more irregular shapes."
    ],
    tips: "The process of making the puzzle is just as engaging as solving it. Laminating makes pieces more durable."
  },
  {
    id: 82, title: "Colour Mixing Exploration", category: "learning", emoji: "🎨",
    ages: "3–8", time: "20 min", difficulty: "easy",
    supplies: ["Red, yellow, and blue paint (the three primary colours)", "White and black", "Mixing palette or ice cube tray", "Paper to test colours", "Brush"],
    description: "Mix primary colours to discover what happens  - and try to make every colour in the rainbow.",
    steps: [
      "Put red, yellow, and blue paint in separate ice cube tray sections.",
      "Mix red and yellow  - what colour? Orange!",
      "Mix yellow and blue  - what colour? Green!",
      "Mix red and blue  - what colour? Purple!",
      "Try adding white to any colour  - what happens?",
      "Try adding black to any colour.",
      "Try to match a specific colour: brown, pink, grey, teal.",
      "Paint a rainbow using only the colours you mixed."
    ],
    tips: "Frame this as a science experiment, not an art project  - curiosity over neatness."
  },
  {
    id: 83, title: "Measurement Cooking", category: "learning", emoji: "📏",
    ages: "5–10", time: "30–45 min", difficulty: "medium",
    supplies: ["Measuring cups and spoons", "Scales", "Ingredients for a simple recipe", "Recipe card"],
    description: "Cook a simple recipe while practising fractions, measurement, and following instructions.",
    steps: [
      "Choose a simple recipe: muffins, pancakes, no-bake cookies.",
      "Read through the whole recipe together before starting.",
      "Let children measure all ingredients themselves.",
      "Discuss: what is ½ a cup? Can we use a ¼ cup twice instead?",
      "Weigh on scales and compare to cup measurements.",
      "Follow steps in order  - discuss why sequence matters in cooking.",
      "Eat and discuss what worked and what you might change."
    ],
    tips: "Slightly wrong amounts in forgiving recipes (muffins, pancakes) are fine. The learning matters more than perfect results."
  },
  {
    id: 84, title: "Backyard Weather Station", category: "learning", emoji: "🌤️",
    ages: "6–12", time: "1 hr to build, daily use", difficulty: "medium",
    supplies: ["Plastic bottle (rain gauge)", "Ruler", "Thermometer", "Pinwheel or homemade wind vane", "Notebook for records"],
    description: "Build simple weather instruments and record daily observations over weeks.",
    steps: [
      "Make a rain gauge: mark centimetre lines on a straight-sided plastic bottle.",
      "Build a wind vane from a straw, pencil, and cut cardboard arrow and tail.",
      "Set up the thermometer in a shaded spot.",
      "Each morning, record: temperature, rainfall since yesterday, wind direction, cloud cover.",
      "Draw a weather symbol for each day.",
      "After two weeks, look for patterns.",
      "Compare your data to the official forecast  - how accurate were you?"
    ],
    tips: "Keep the same observation time every day (morning is ideal) for consistent data."
  },

  // ── SEASONAL & HOLIDAY ──────────────────────────────────────────────────
  {
    id: 85, title: "Salt Dough Christmas Ornaments", category: "seasonal", emoji: "🎄",
    ages: "3–12", time: "1 hr + drying", difficulty: "medium",
    supplies: ["1 cup salt", "1 cup flour", "½ cup water", "Cookie cutters", "Straw (for making hole)", "Paint and string"],
    description: "Bake salt dough cutouts and paint them as keepsake Christmas ornaments.",
    steps: [
      "Mix salt, flour, and water to form a smooth dough.",
      "Roll to about 5mm thick.",
      "Cut shapes with cookie cutters.",
      "Use a straw to poke a hole at the top before baking.",
      "Bake at 120°C / 250°F for 2–3 hours until completely hard.",
      "Cool, then paint and decorate.",
      "Thread ribbon or string through the hole.",
      "Write the year on the back  - these last for decades."
    ],
    tips: "Press a child's handprint into dough before baking for an irreplaceable keepsake."
  },
  {
    id: 86, title: "Valentine's Day Cards", category: "seasonal", emoji: "💌",
    ages: "3–12", time: "30–45 min", difficulty: "easy",
    supplies: ["Card or thick paper", "Red and pink paint", "Scissors", "Glue", "Glitter", "Markers"],
    description: "Make handmade cards for family and friends using stamping, cutting, and decorating.",
    steps: [
      "Fold card in half.",
      "Cut a heart from a sponge and use it to stamp hearts on the front.",
      "Add glitter glue, sticker gems, or hand-drawn details.",
      "Inside: write a message or dictate one to be written.",
      "Try potato stamp hearts: cut a potato in half and carve a heart, paint and stamp.",
      "Make a card for everyone in the family and any special people."
    ],
    tips: "The potato heart stamp makes very satisfying, perfect hearts  - much better than trying to draw them."
  },
  {
    id: 87, title: "Easter Egg Dyeing", category: "seasonal", emoji: "🐣",
    ages: "3–12", time: "45 min", difficulty: "easy",
    supplies: ["Hard-boiled eggs", "White vinegar", "Food colouring", "Cups", "Water", "Spoons", "Wax crayon for resist technique"],
    description: "Dye hard-boiled eggs in vibrant colours using food dye and vinegar.",
    steps: [
      "Hard boil and cool eggs completely.",
      "Mix: ½ cup water + 1 tsp white vinegar + food colouring in each cup.",
      "Optional: draw designs on eggs with a white wax crayon first  - the wax resists the dye.",
      "Lower eggs into cups using a spoon.",
      "Leave for at least 5 minutes  - longer = darker colour.",
      "Remove and let dry on a rack.",
      "Layer colours: dye yellow first, then dip in blue for green."
    ],
    tips: "Rubber bands stretched around the egg before dyeing create stripe patterns when removed."
  },
  {
    id: 88, title: "Spring Flower Pressing", category: "seasonal", emoji: "🌼",
    ages: "4–12", time: "20 min + 2 weeks pressing", difficulty: "easy",
    supplies: ["Freshly picked flowers and leaves", "Heavy books", "Paper", "White glue", "Card for display"],
    description: "Press and dry flowers to preserve them, then arrange them into botanical art.",
    steps: [
      "Pick flowers in the morning when they are fully open but fresh.",
      "Place flowers face-down on a sheet of paper.",
      "Cover with another sheet of paper.",
      "Place inside a heavy book and stack more books on top.",
      "Leave undisturbed for 2 weeks.",
      "Carefully remove dried flowers.",
      "Arrange on card and glue down with tiny dabs of glue.",
      "Display in a frame."
    ],
    tips: "Flat flowers like pansies, daisies, and violas press the most beautifully. Thick flowers don't press well."
  },
  {
    id: 89, title: "Autumn Leaf Wreath", category: "seasonal", emoji: "🍂",
    ages: "4–10", time: "45 min", difficulty: "easy",
    supplies: ["Collected Autumn leaves", "A paper plate", "Scissors", "Glue", "String to hang"],
    description: "Arrange and glue colourful Autumn leaves onto a ring to make a seasonal wreath.",
    steps: [
      "Cut the centre out of a paper plate to make a ring.",
      "Collect a variety of Autumn leaves  - different colours, shapes, and sizes.",
      "Arrange leaves around the ring, overlapping each other.",
      "Glue each leaf down, working from the outside in.",
      "Add a second and third layer for fullness.",
      "Tie string through the top to hang.",
      "Add small pinecones, acorns, or berries for extra texture."
    ],
    tips: "Press leaves for a few days first so they don't curl. Spray with hairspray when done to help preserve them."
  },
  {
    id: 90, title: "Snow Globe in a Jar", category: "seasonal", emoji: "❄️",
    ages: "5–12", time: "30 min", difficulty: "medium",
    supplies: ["Clean glass jar with tight lid", "Waterproof figurine or small toy", "Distilled water", "Glycerine (from pharmacy)", "White glitter or fake snow", "Waterproof glue"],
    description: "Seal a tiny winter scene inside a jar with swirling snow  - a keepsake to keep forever.",
    steps: [
      "Glue your figurine to the inside of the jar lid. Let cure completely (overnight).",
      "Fill the jar almost full with distilled water.",
      "Add 2–3 teaspoons of glycerine  - this slows the snow fall.",
      "Add white glitter or fake snow flakes.",
      "Run a line of waterproof glue around the lid thread.",
      "Screw the lid on tightly (figurine now inside the jar).",
      "Let the glue cure for 24 hours.",
      "Flip the jar over and shake!"
    ],
    tips: "Distilled water stays clearer than tap water over time. More glycerine = slower, more magical snow fall."
  },
  {
    id: 91, title: "Thanksgiving Handprint Turkey", category: "seasonal", emoji: "🦃",
    ages: "2–8", time: "30 min", difficulty: "easy",
    supplies: ["Brown, orange, red, yellow paint", "Paper", "Markers"],
    description: "Turn a handprint into a turkey by adding feathers, a beak, and a wattle.",
    steps: [
      "Paint the palm and thumb brown.",
      "Spread fingers wide and press firmly onto paper  - the fingers become tail feathers.",
      "Let dry.",
      "Paint each finger-feather a different colour: red, orange, yellow.",
      "Add a small orange triangle beak to the thumb-head.",
      "Draw a red wattle below the beak.",
      "Add two eyes.",
      "Write the child's name and year on the back."
    ],
    tips: "Layer the colours on the feathers before pressing for a multi-coloured print with no drying time needed."
  },
  {
    id: 92, title: "Halloween Paper Bag Costumes", category: "seasonal", emoji: "🎃",
    ages: "4–10", time: "45 min", difficulty: "medium",
    supplies: ["Large paper grocery bags", "Scissors", "Paints or markers", "Tape", "Felt, yarn, foam sheets"],
    description: "Cut and decorate a paper bag helmet or armour for a quick costume  - knight, robot, monster.",
    steps: [
      "Cut eye holes and a face opening in a large bag that fits over the head.",
      "Paint it to match your character: silver for a knight, grey for a robot, orange for a pumpkin.",
      "Add details with markers and foam cut-outs.",
      "For body armour: cut a second bag into a tunic shape.",
      "Decorate and tape shoulder sections.",
      "Try on and adjust before the paint fully dries.",
      "Wear over clothes as part of the costume."
    ],
    tips: "This is a great last-minute costume base. The robot concept works best  - all straight lines and silver paint."
  },
  {
    id: 93, title: "St. Patrick's Day Rainbow", category: "seasonal", emoji: "🌈",
    ages: "3–8", time: "30 min", difficulty: "easy",
    supplies: ["Paper", "Red, orange, yellow, green, blue, purple paint or strips of paper", "Cotton balls", "Glue"],
    description: "Build a rainbow scene with cotton-wool clouds at each end and a pot of gold.",
    steps: [
      "Draw or glue a large arc on paper using rainbow colours in order: red, orange, yellow, green, blue, purple.",
      "Paint or stick coloured strips of paper in arcs.",
      "Glue pulled-apart cotton balls at each end as clouds.",
      "Draw or cut out a small black pot and glue at one end.",
      "Fill the pot with gold circles cut from yellow paper.",
      "Add a green field at the bottom and a blue sky."
    ],
    tips: "Use the ROYGBIV order as a memory lesson. Sing 'Over the Rainbow' while you make it."
  },
  {
    id: 94, title: "Summer Suncatcher", category: "seasonal", emoji: "☀️",
    ages: "4–10", time: "30 min + dry time", difficulty: "easy",
    supplies: ["Clear contact paper or sticky back plastic", "Tissue paper in bright colours", "Scissors", "String", "Window"],
    description: "Press coloured tissue paper onto sticky contact paper to make a stained-glass sun catcher that glows.",
    steps: [
      "Cut a circle or sun shape from the contact paper.",
      "Peel the backing and lay sticky-side up.",
      "Cut small pieces of tissue paper in bright colours.",
      "Press pieces all over the sticky surface, overlapping for new colours.",
      "Cover the back with another piece of contact paper, sticky sides together.",
      "Trim the edges.",
      "Punch a hole at the top and thread string to hang.",
      "Hang in a sunny window and watch the colours glow."
    ],
    tips: "No skills required and the result always looks beautiful. A great activity for all ages at the same time."
  },

  // ── COOKING (more) ──────────────────────────────────────────────────────
  {
    id: 95, title: "French Toast Sticks", category: "cooking", emoji: "🍞",
    ages: "4–10", time: "20 min", difficulty: "easy",
    supplies: ["Thick bread (brioche or Texas toast)", "2 eggs", "¼ cup milk", "1 tsp cinnamon", "1 tsp vanilla", "Butter", "Maple syrup for dipping"],
    description: "Dip thick bread fingers into egg custard and pan-fry them into golden dippable sticks.",
    steps: [
      "Whisk eggs, milk, cinnamon, and vanilla in a shallow bowl.",
      "Cut each slice of bread into 3 long strips.",
      "Melt butter in a pan over medium heat.",
      "Dip each strip in the egg mixture  - coat all sides, let it soak for a few seconds.",
      "Cook in the pan for 2–3 minutes each side until golden brown.",
      "Serve in a bunch with maple syrup in a small pot for dipping."
    ],
    tips: "Day-old bread absorbs the custard better without falling apart. Add a pinch of nutmeg to the mix for extra warmth."
  },
  {
    id: 96, title: "Decorated Cupcakes", category: "cooking", emoji: "🧁",
    ages: "4–10", time: "1 hr", difficulty: "medium",
    supplies: ["Plain baked cupcakes (store-bought or homemade)", "Buttercream icing", "Food colouring", "Piping bags or zip-lock bags", "Sprinkles, candy, edible glitter"],
    description: "The baking is done  - now the fun part: decorating cupcakes into tiny works of art.",
    steps: [
      "Divide buttercream into bowls and colour each one differently.",
      "Spoon each colour into a piping bag or zip-lock bag with a corner snipped off.",
      "Pipe a swirl starting from the outside edge and spiralling inward.",
      "Add sprinkles and decorations before the icing sets.",
      "Try making faces, flowers, or themed designs.",
      "Display them before eating  - they're too pretty to rush!"
    ],
    tips: "Chill the cupcakes for 10 minutes before decorating  - warm cupcakes melt the icing."
  },
  {
    id: 97, title: "Build Your Own Trail Mix", category: "cooking", emoji: "🥜",
    ages: "3–10", time: "10 min", difficulty: "easy",
    supplies: ["Selection of: nuts, seeds, dried fruit, chocolate chips, cereal, pretzels, coconut", "Small bowls for each ingredient", "Paper cups or bags to fill"],
    description: "Set out an ingredient bar and let everyone mix their own perfect snack bag.",
    steps: [
      "Pour each ingredient into its own small bowl.",
      "Give each person a cup or small bag.",
      "Take turns scooping ingredients they want.",
      "Mix them together.",
      "Taste test  - is it sweet enough? Crunchy enough?",
      "Seal the bags and label them."
    ],
    tips: "Talk about what each ingredient does  - nuts for protein, dried fruit for energy. Great for a hike or long car ride."
  },
  {
    id: 98, title: "Popcorn Seasoning Bar", category: "cooking", emoji: "🍿",
    ages: "4–12", time: "15 min", difficulty: "easy",
    supplies: ["Plain popped popcorn", "Melted butter", "Toppings: cinnamon sugar, parmesan, ranch powder, sweet chilli, nutritional yeast, salt"],
    description: "Make a big bowl of plain popcorn and set up a seasoning bar to customise each person's portion.",
    steps: [
      "Pop a large batch of plain popcorn.",
      "Divide into individual bowls.",
      "Set out all seasonings in small dishes.",
      "Drizzle a little melted butter over each bowl (it helps seasonings stick).",
      "Shake on chosen seasonings and toss well.",
      "Compare flavour combos  - who had the best one?"
    ],
    tips: "Try cinnamon sugar + a pinch of cayenne for a surprising sweet-heat combo. Parmesan + garlic salt is a crowd favourite."
  },
  {
    id: 99, title: "Pita Pocket Pizzas", category: "cooking", emoji: "🫓",
    ages: "3–10", time: "20 min", difficulty: "easy",
    supplies: ["Mini pita breads", "Tomato sauce", "Shredded mozzarella", "Toppings of choice", "Baking tray", "Oven"],
    description: "Mini pita breads become personal pizzas in under 15 minutes  - perfect for fussy eaters.",
    steps: [
      "Preheat oven to 200°C / 400°F.",
      "Place pita breads on a baking tray.",
      "Spread a spoonful of tomato sauce on each.",
      "Add cheese and chosen toppings.",
      "Bake for 8–10 minutes until cheese is melted and edges are crispy.",
      "Cool for 2 minutes before eating."
    ],
    tips: "These are also great in an air fryer  - 5 minutes at 180°C and they're perfect and crispy."
  },

  // ── OUTDOOR (more) ──────────────────────────────────────────────────────
  {
    id: 100, title: "Kite Flying", category: "outdoor", emoji: "🪁",
    ages: "3–12", time: "1+ hr", difficulty: "easy",
    supplies: ["A kite (store-bought or homemade)", "An open area like a park or beach", "Wind"],
    description: "Head to an open space on a breezy day and fly a kite  - one of the most joyful outdoor activities there is.",
    steps: [
      "Check the wind  - a light to moderate breeze is ideal. Too still or too gusty won't work.",
      "Find a wide-open space away from trees and powerlines.",
      "Unwind about 10 metres of string before launching.",
      "One person holds the kite up, the other holds the string and walks backwards.",
      "Release the kite into the wind and let out string steadily as it rises.",
      "Steer by pulling and releasing the string to ride updrafts.",
      "Reel in slowly to land."
    ],
    tips: "Run with your back to the wind, not toward it. If the kite nosedives, let out more string quickly."
  },
  {
    id: 101, title: "Backyard Camping Night", category: "outdoor", emoji: "⛺",
    ages: "4–12", time: "Evening + overnight", difficulty: "medium",
    supplies: ["Tent or blanket fort", "Sleeping bags", "Torches or fairy lights", "Snacks", "Books or card games", "Hot chocolate"],
    description: "Camp in the backyard for a night of stargazing, stories, and sleeping under the sky.",
    steps: [
      "Set up the tent together in the afternoon.",
      "Decorate with fairy lights.",
      "Make a camp dinner together  - even just sandwiches eaten outside counts.",
      "As it gets dark, lie on a blanket and look for constellations.",
      "Tell stories by torchlight.",
      "Settle in for the night  - you're surprisingly close to home but it feels like an adventure.",
      "Make pancakes or toast outside in the morning."
    ],
    tips: "Bring a torch for each person so nobody has to be scared of the dark. Make it a special event, not just sleeping outside."
  },
  {
    id: 102, title: "Nature Mandala", category: "outdoor", emoji: "🌺",
    ages: "4–12", time: "30–60 min", difficulty: "easy",
    supplies: ["A flat patch of ground or a large flat rock", "Collected natural materials: leaves, petals, stones, seeds, bark, feathers"],
    description: "Arrange natural materials in a circular repeating pattern directly on the ground  - no glue needed.",
    steps: [
      "Choose a flat clear surface to work on.",
      "Find the centre and place your first item there.",
      "Work outward in rings, placing items symmetrically.",
      "Rotate items the same way around each ring  - all pointing in or all pointing out.",
      "Add rings until the mandala is as large as you want.",
      "Take a photo from directly above.",
      "Leave it for nature to slowly reclaim."
    ],
    tips: "This is deeply calming for anxious or energetic kids. There are no mistakes  - anything placed symmetrically works."
  },
  {
    id: 103, title: "Puddle Painting", category: "outdoor", emoji: "🌧️",
    ages: "2–7", time: "Open-ended", difficulty: "easy",
    supplies: ["Rain or a garden hose", "Waterproof outdoor paint or food colouring", "Old clothes and boots", "A hard outdoor surface"],
    description: "Add colour to puddles and splash through them to create big swirling outdoor art.",
    steps: [
      "Wait for rain or create puddles with a hose.",
      "Add drops of food colouring or diluted outdoor paint to puddles.",
      "Watch the colours spread across the surface.",
      "Splash gently at first  - the colour moves as you move.",
      "Drag a stick through to create patterns.",
      "Jump in for the full effect."
    ],
    tips: "Wear old clothes. The paint will wash off skin and most surfaces with water. Do it on the driveway, not on grass."
  },
  {
    id: 104, title: "Stargazing", category: "outdoor", emoji: "🌟",
    ages: "4–12", time: "1 hr", difficulty: "easy",
    supplies: ["Blankets", "Pillows", "Star map app (e.g. Star Walk) or printed chart", "Hot drinks", "Binoculars if available"],
    description: "Lie on blankets and identify constellations, planets, and satellites passing overhead.",
    steps: [
      "Pick a clear night away from bright indoor lights.",
      "Lay blankets on the grass and lie flat on your backs.",
      "Let your eyes adjust for 10 minutes  - you'll see far more once they do.",
      "Use a star map app to identify what you're looking at.",
      "Find Orion's Belt, the Southern Cross, or the Big Dipper depending on your location.",
      "Look for satellites  - steady moving lights. Wave at them.",
      "Watch for shooting stars  - especially during meteor showers."
    ],
    tips: "Turn off phone brightness after using the map  - bright screens kill night vision. Look up the next meteor shower date in advance."
  },

  // ── CRAFTS (more) ───────────────────────────────────────────────────────
  {
    id: 105, title: "Friendship Bracelets", category: "crafts", emoji: "🤝",
    ages: "6–12", time: "30–60 min", difficulty: "medium",
    supplies: ["Embroidery floss in several colours", "Scissors", "Tape or clipboard to anchor the bracelet while weaving"],
    description: "Knot and weave embroidery thread into a woven bracelet to give to a friend.",
    steps: [
      "Cut 4–6 strands of different colours, each about 60cm long.",
      "Tie them together with an overhand knot, leaving a 5cm tail.",
      "Tape the knot to a table or clipboard so both hands are free.",
      "Take the leftmost string and make forward knots across all other strings.",
      "When it reaches the right side, it becomes the rightmost string.",
      "Repeat with the new leftmost string  - diagonal stripes will form.",
      "Continue until the bracelet is long enough to tie around a wrist.",
      "Finish with an overhand knot and trim the ends."
    ],
    tips: "YouTube videos are very helpful for the first bracelet. Start with just 4 strings in 2 colours to learn the knot."
  },
  {
    id: 106, title: "Tie-Dye T-Shirts", category: "crafts", emoji: "👕",
    ages: "5–12", time: "1 hr + cure time", difficulty: "medium",
    supplies: ["White 100% cotton t-shirts", "Tie-dye kit or fabric dye", "Rubber bands", "Gloves", "Plastic wrap or bags", "Bucket of water"],
    description: "Twist, fold, and dye white t-shirts into one-of-a-kind wearable art.",
    steps: [
      "Dampen the shirt with water.",
      "For a spiral: pinch the centre, twist the shirt into a flat disc, wrap rubber bands across it.",
      "For stripes: fold the shirt accordion-style and wrap with rubber bands.",
      "Apply dye to each section  - squeeze the bottle right against the fabric.",
      "Flip and apply dye to the back.",
      "Wrap tightly in plastic wrap and leave for 6–24 hours.",
      "Rinse under cold water while still rubber-banded, then remove bands.",
      "Rinse until clear, wash in hot water, and dry."
    ],
    tips: "More dye = more vivid colour. Don't be shy with it. Wear old clothes and gloves  - the dye stains everything."
  },
  {
    id: 107, title: "Paper Mache Bowl", category: "crafts", emoji: "🫙",
    ages: "6–12", time: "3 sessions over 2 days", difficulty: "hard",
    supplies: ["Newspaper torn into strips", "Flour + water paste (1:2 ratio) or PVA glue diluted with water", "A balloon or bowl to use as a mould", "Paint and varnish to finish"],
    description: "Layer paper strips over a mould to build a bowl that hardens as it dries.",
    steps: [
      "Mix flour and water into a smooth paste (like thin pancake batter).",
      "Blow up a balloon or turn a bowl upside down and cover with cling film.",
      "Dip newspaper strips in paste one at a time, remove excess, and layer over the mould.",
      "Apply 3–4 layers, making sure each layer goes in a different direction.",
      "Let dry completely (at least overnight).",
      "Apply 2–3 more layers and dry again.",
      "Remove from the mould, trim the edges neatly.",
      "Paint, decorate, and seal with varnish."
    ],
    tips: "More layers = stronger bowl. At least 6 total. Let each batch of layers dry fully before adding the next."
  },
  {
    id: 108, title: "Shell Wind Chimes", category: "crafts", emoji: "🐚",
    ages: "5–10", time: "30 min", difficulty: "easy",
    supplies: ["Collected shells", "A sturdy stick or piece of driftwood", "Twine or fishing line", "A drill or nail to make holes in shells", "Beads (optional)"],
    description: "Hang shells from a stick on different-length strings to make a chime that sings in the breeze.",
    steps: [
      "An adult uses a drill or heated nail to make a small hole in each shell.",
      "Cut strings of different lengths  - the variety makes the chime look and sound better.",
      "Thread each shell onto a string, tying a bead below it to stop it slipping through.",
      "Tie the other end of each string along the length of the stick.",
      "Space them unevenly for a better sound.",
      "Tie a string to each end of the stick to hang it.",
      "Hang outside and listen."
    ],
    tips: "Thinner shells (like mussel) break easily  - use thicker shells. Add beads, driftwood pieces, and sea glass for variety."
  },
  {
    id: 109, title: "Sticker Collage Bookmarks", category: "crafts", emoji: "🔖",
    ages: "3–8", time: "15 min", difficulty: "easy",
    supplies: ["Card cut into bookmark strips (2cm x 15cm)", "Stickers of all kinds", "Markers", "Clear sticky-back laminate or tape for sealing"],
    description: "Cover card strips with stickers to make personalised bookmarks for favourite books.",
    steps: [
      "Cut card into long thin strips.",
      "Cover each strip completely with stickers  - overlap them, mix sizes.",
      "Write a name or message with marker if any card shows through.",
      "Seal with a strip of clear sticky-back laminate on both sides.",
      "Trim the edges neatly.",
      "Punch a hole at the top and thread ribbon through."
    ],
    tips: "Make a set as a gift  - pack 5 bookmarks in an envelope with a note."
  },

  // ── GAMES (more) ─────────────────────────────────────────────────────────
  {
    id: 110, title: "Go Fish & Snap", category: "games", emoji: "🃏",
    ages: "4–8", time: "20–30 min", difficulty: "easy",
    supplies: ["A standard deck of playing cards"],
    description: "Two classic card games that teach turn-taking, memory, and number matching.",
    steps: [
      "Go Fish: deal 5 cards each. On your turn, ask another player for a number you hold. If they have it, they hand it over. If not, they say 'Go Fish!' and you draw from the pile. Collect all 4 of a kind to score.",
      "Snap: deal all cards face-down in equal piles. Take turns flipping a card into the centre. When two matching cards appear in a row, first to shout SNAP wins the pile.",
      "Whoever has the most cards when the deck runs out wins Go Fish.",
      "For Snap: the person who collects all cards wins."
    ],
    tips: "For very young children, remove face cards from Go Fish to leave only numbers 1-10. Snap is usually preferred by ages 4-6."
  },
  {
    id: 111, title: "Spaghetti Tower Challenge", category: "games", emoji: "🍝",
    ages: "6–12", time: "30 min", difficulty: "hard",
    supplies: ["Uncooked spaghetti (20 strands per person)", "Mini marshmallows (30 per person)", "Measuring tape"],
    description: "Build the tallest freestanding tower using only spaghetti and marshmallows as connectors.",
    steps: [
      "Give each builder or team equal amounts of spaghetti and marshmallows.",
      "Set a 20-minute build timer.",
      "Push marshmallows onto spaghetti ends to join pieces.",
      "Build upward  - consider triangular supports for stability.",
      "No tape, no glue, no other materials.",
      "When time is up, measure each tower's height.",
      "Tallest freestanding tower wins."
    ],
    tips: "Triangular shapes are much stronger than squares. The winning strategy almost always involves a wide triangular base."
  },
  {
    id: 112, title: "Story Dice Game", category: "games", emoji: "🎲",
    ages: "5–10", time: "20–30 min", difficulty: "easy",
    supplies: ["Rory's Story Cubes (bought), or homemade: blank dice with drawings on each face"],
    description: "Roll picture dice and build a story together using whatever images come up.",
    steps: [
      "Each player rolls 3 dice.",
      "The first player starts a story using all 3 of their images in the opening.",
      "The next player rolls their dice and continues the story using their images.",
      "Keep going until everyone has had 2–3 turns.",
      "The last player must find a way to end the story.",
      "You can retell the whole story from the beginning when done."
    ],
    tips: "Make your own story dice by drawing simple images on blank wooden cubes or sticking small picture stickers on regular dice."
  },
  {
    id: 113, title: "Musical Statues", category: "games", emoji: "🎵",
    ages: "2–8", time: "20 min", difficulty: "easy",
    supplies: ["Music player", "Space to move"],
    description: "Dance freely while music plays, freeze like a statue the instant it stops.",
    steps: [
      "Clear a dancing space.",
      "One person controls the music and pauses it randomly.",
      "Everyone dances wildly while it plays.",
      "The instant the music stops, freeze completely still.",
      "Anyone who moves after the music stops is out (or just giggled at).",
      "Last dancer standing wins.",
      "Give the winner the job of controlling the music next round."
    ],
    tips: "For under-5s, skip the elimination and make it purely about the silly freezing poses. Call out a pose to freeze in: 'freeze like a flamingo!'"
  },

  // ── SCIENCE (more) ──────────────────────────────────────────────────────
  {
    id: 114, title: "Paper Airplane Challenge", category: "science", emoji: "✈️",
    ages: "5–12", time: "45 min", difficulty: "medium",
    supplies: ["A4 paper (lots of it)", "Measuring tape", "Tape", "Paperclips"],
    description: "Design, fold, and test paper airplanes -experiment with different designs for distance and accuracy.",
    steps: [
      "Each person starts with the classic dart fold as a baseline.",
      "Fly it and measure the distance.",
      "Now experiment: wider wings, thinner nose, more folds, a paperclip on the nose for weight.",
      "Test each modification and measure the result.",
      "Try for accuracy: place a target (a hoop on the floor) and aim for it.",
      "Try for time in air: which design glides the longest?",
      "Discuss what changes helped and why  - wing shape, weight distribution."
    ],
    tips: "A paperclip on the nose dramatically improves distance in most designs. The 'Nakamura lock' is the longest-flying design for most kids to fold."
  },
  {
    id: 115, title: "Magnet Exploration", category: "science", emoji: "🧲",
    ages: "4–10", time: "30 min", difficulty: "easy",
    supplies: ["Several magnets (different sizes and strengths)", "A tray of mixed objects: coins, paperclips, rubber bands, plastic toys, fabric, aluminium foil, pencils, steel screws"],
    description: "Test which materials magnets attract and which they don't -and explore how magnetic force works through surfaces.",
    steps: [
      "Lay out all the objects and predict: will the magnet attract it?",
      "Test each item and sort into 'attracted' and 'not attracted' piles.",
      "Does the magnet work through paper? Through your hand? Through water?",
      "Hold two magnets facing each other -feel the push and pull.",
      "Try to move a paperclip without touching it by sliding the magnet under the table.",
      "Make a paperclip dance: hold a paperclip by thread, bring a magnet close -it will hover!",
      "Discuss: what do the attracted materials have in common? (Iron, steel.)"
    ],
    tips: "Neodymium (rare earth) magnets are dramatically stronger than toy magnets -keep them away from phones and young children, but they're great for demonstrations."
  },
  {
    id: 116, title: "Walking Rainbow Water", category: "science", emoji: "🌈",
    ages: "4–10", time: "20 min + observation", difficulty: "easy",
    supplies: ["7 clear glasses or jars", "Water", "Red, yellow, and blue food colouring", "Paper towels"],
    description: "Watch water travel up paper towels and mix colours to create a walking rainbow over several hours.",
    steps: [
      "Set up 7 glasses in a row.",
      "Fill glasses 1, 3, 5, and 7 halfway with water.",
      "Colour glass 1 red, glass 3 yellow, glass 5 blue, glass 7 red.",
      "Leave glasses 2, 4, and 6 empty.",
      "Fold paper towels into long strips and drape them between each glass, dipping into the water.",
      "Watch over the next few hours as the water walks up the paper towel and drips into the empty glasses.",
      "Secondary colours form where two colours meet: orange, green, and purple."
    ],
    tips: "Set this up in the morning and check back throughout the day. The full rainbow takes 3-6 hours to complete."
  },

  // ── ART (more) ──────────────────────────────────────────────────────────
  {
    id: 117, title: "Pastel Drawing", category: "art", emoji: "🖍️",
    ages: "4–12", time: "30 min", difficulty: "easy",
    supplies: ["Soft pastels or oil pastels", "Dark or coloured paper", "Cotton balls or fingers for blending"],
    description: "Draw with pastels on dark paper for vivid, dreamy artwork that glows off the page.",
    steps: [
      "Start on dark or black paper for the most striking effect.",
      "Draw the outline of your subject first.",
      "Fill in with bold pastel colour -press firmly for bright coverage.",
      "Use a finger or cotton ball to blend two colours into each other.",
      "Add lighter colours on top of dark for highlights.",
      "Draw stars or spots on top for a night sky effect.",
      "Seal with hairspray to stop smudging."
    ],
    tips: "Dark paper makes pastel colours appear to glow. A night sky, a sunset, or a forest silhouette all look stunning this way."
  },
  {
    id: 118, title: "Stencil Art", category: "art", emoji: "🟦",
    ages: "4–10", time: "30 min", difficulty: "easy",
    supplies: ["Card or foam sheets to cut stencils from", "Scissors", "Sponges or stiff brushes", "Paint", "Paper"],
    description: "Cut shapes from card to use as stencils, then sponge paint through them for clean, repeating prints.",
    steps: [
      "Draw a simple shape on card: a star, heart, leaf, animal outline.",
      "Cut it out carefully -the hole is your stencil.",
      "Hold or tape the stencil flat on paper.",
      "Dab paint through the hole with a sponge -use an up-and-down dabbing motion, not a brush stroke.",
      "Lift the stencil straight up to reveal a clean edge.",
      "Repeat across the paper in a pattern.",
      "Use multiple stencils and colours for a layered design."
    ],
    tips: "Let each colour dry before applying the next stencil over the same area. Don't let paint seep under the stencil edges."
  },
  {
    id: 119, title: "Monoprint", category: "art", emoji: "🖨️",
    ages: "5–10", time: "20 min", difficulty: "easy",
    supplies: ["Paint", "A smooth flat surface (a chopping board, plate, or baking tray)", "Paper", "A pencil or skewer"],
    description: "Draw into a layer of paint on a flat surface, press paper on top, and lift it to reveal a unique print.",
    steps: [
      "Roll or spread a thin, even layer of paint over a flat smooth surface.",
      "Draw a design into the paint with a pencil tip, skewer, or finger.",
      "You can also press leaves or textures into the paint.",
      "Lay a piece of paper on top and press firmly all over.",
      "Peel the paper back slowly from one corner.",
      "The design transfers in reverse.",
      "Each print is unique -you can only make one."
    ],
    tips: "Work quickly before the paint dries. A thin, even paint layer gives the cleanest print -too thick and it smears."
  },

  // ── LEARNING (more) ─────────────────────────────────────────────────────
  {
    id: 120, title: "Time Capsule", category: "learning", emoji: "📦",
    ages: "5–12", time: "45 min", difficulty: "easy",
    supplies: ["A container with a lid: box, tin, or jar", "Paper and pens", "Small objects to include", "Tape to seal"],
    description: "Fill a box with drawings, notes, and objects that capture this moment in time, then seal and hide it.",
    steps: [
      "Each person writes a letter to their future self: what are you into right now? What do you wish for?",
      "Draw a self-portrait.",
      "Include a photo if you have one to print.",
      "Add small objects: a coin, a ticket stub, a favourite sticker.",
      "Write down the date and when the capsule should be opened.",
      "Seal the container with tape.",
      "Hide it somewhere memorable -under a bed, in a shelf, buried in the garden with a map."
    ],
    tips: "Set a specific open date: 'open on [child's name]'s 10th birthday' or 'open in 2 years.' The anticipation is the best part."
  },
  {
    id: 121, title: "Word Family Flip Book", category: "learning", emoji: "📖",
    ages: "4–7", time: "30 min", difficulty: "easy",
    supplies: ["Card or thick paper", "Scissors", "Markers", "Binder clip or ring to hold together"],
    description: "Make a flip book where changing the first letter creates new rhyming words -cat, bat, hat, sat.",
    steps: [
      "Choose a word family ending: -at, -og, -ig, -en, -ot.",
      "Write the ending on the right side of a card strip.",
      "Make a smaller strip that flips on the left side, showing one letter per page: c, b, h, s, m.",
      "Cut the letter strip into individual sections and clip or ring-bind on the left.",
      "Flip through letters to make different words.",
      "Read each word aloud as you flip.",
      "Make one for each vowel sound."
    ],
    tips: "Use bright colours for consonants and one colour for the ending to help kids visually separate the parts of the word."
  },
  {
    id: 122, title: "Map of Our Home", category: "learning", emoji: "🗺️",
    ages: "5–10", time: "30 min", difficulty: "easy",
    supplies: ["Large paper", "Pencil", "Ruler", "Coloured pencils", "A walk around your home first"],
    description: "Draw a bird's-eye view map of your home -each room, door, and piece of furniture.",
    steps: [
      "Walk through the whole house together and count the rooms.",
      "Start with a large rectangle for the outside walls.",
      "Add interior walls to divide rooms.",
      "Draw doors as small arcs showing which way they open.",
      "Add furniture as simple shapes: rectangle for a bed, circle for a table.",
      "Label each room.",
      "Colour each room differently.",
      "Add a compass rose with N, S, E, W."
    ],
    tips: "After drawing the home, extend the activity to draw the street, then the neighbourhood. Introduction to scale and spatial thinking."
  }

];
