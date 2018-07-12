<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Hello world">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')"/>
    </ActionBar>

    <StackLayout class="hello-world">
 
      <ScrollView>
        <StackLayout class="home-panel">
          <!-- On Android the card view plugin requires adding an external library
              therefore it can't be demoed on Playground. You will have to download this project
              and build it locally to try it on Android -->
          <CardView v-if="showCardView" v-for="item in items" :key="item.heading" class="card" elevation="40" radius="10" ios:shadowRadius="3">
            <StackLayout class="card-layout">
              <Image :src="item.image" />
              <Label class="h2" :text="item.heading" />
              <Label class="body" textWrap="true" :text="item.content" />
            </StackLayout>
          </CardView>
          <Label v-show="!showCardView" class="p-20" textWrap="true" text="On Android the card view plugin requires adding an external library therefore it can't be demoed on Playground. You will have to download this project and build it locally to try it on Android" />
        </StackLayout>
      </ScrollView>
    </StackLayout>

    
  </Page>
</template>

<script>
  export default {
    data () {
      return {
        surprise: false,
        showCardView: true,
        items: [
          { image: "https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png", heading: "Bulbasaur", content: "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun’s rays, the seed grows progressively larger." },
          { image: "https://cdn.bulbagarden.net/upload/thumb/7/73/002Ivysaur.png/250px-002Ivysaur.png", heading: "Ivysaur", content: "To support its weight, Ivysaur’s legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it’s a sign that the bud will bloom into a large flower soon." },
          { image: "https://cdn.bulbagarden.net/upload/thumb/a/ae/003Venusaur.png/250px-003Venusaur.png", heading: "Venusaur", content: "There is a large flower on Venusaur’s back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower’s aroma soothes the emotions of people." },
          { image: "https://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png", heading: "Charmander", content: "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely." },
          { image: "https://cdn.bulbagarden.net/upload/thumb/4/4a/005Charmeleon.png/250px-005Charmeleon.png", heading: "Charmeleon", content: "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color." },
          { image: "https://cdn.bulbagarden.net/upload/thumb/7/7e/006Charizard.png/250px-006Charizard.png", heading: "Charizard", content: "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself." },
          { image: "https://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/250px-007Squirtle.png", heading: "Squirtle", content: "Squirtle’s shell is not merely used for protection. The shell’s rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds." },
          { image: "https://cdn.bulbagarden.net/upload/thumb/0/0c/008Wartortle.png/250px-008Wartortle.png", heading: "Wartortle", content: "Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémon’s toughness as a battler." },
          { image: "https://cdn.bulbagarden.net/upload/thumb/0/02/009Blastoise.png/250px-009Blastoise.png", heading: "Blastoise", content: "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet." }
        ]
      };
    },
  };
</script>

<style scoped>
  .hello-world {
    margin: 20;
  }
  .card {
      background-color: #fff;
      color: #4d4d4d;
      margin: 15 15 0;
  }
  .card-layout {
      padding: 20;
  }
  .card-layout .h1 {
      margin-bottom: 15;
  }

</style>
