<template>
  <view
    :style="{
      width: '100%',
      height: '100%',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }"
    class="container"
  >
    <view
      :style="{
        width: '100%',
        height: '55%',
        flexDirection: 'column',
        justifyContent: 'center',
        align: 'center',
        marginTop: -30,
      }"
    >
      <image-background
        :style="{
          width: '100%',
          height: '115%',
          justifyContent: 'center',
          align: 'center',
        }"
        :source="require('../assets/ball1.png')"
      >
        <view
          :style="{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            align: 'center',
            padding: 30,
          }"
        >
          <image :source="require('../assets/logo.png')" />
        </view>
      </image-background>
    </view>

    <view
      :style="{
        width: '100%',
        height: '45%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 30,
      }"
    >
      <view
        :style="{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignContent: 'center',
        }"
      >
        <touchable-opacity
          :style="{
            backgroundColor: '#1A5CFF',
            width: '45%',
            height: 50,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }"
        >
          <text :style="{ color: 'white', fontSize: 18 }">Sign in</text>
        </touchable-opacity>
        <touchable-opacity
          :style="{
            backgroundColor: 'rgba(153,153,153,0.5)',
            width: '45%',
            height: 50,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }"
          :on-press="goto_signup"
        >
          <text :style="{ color: '#434343', fontSize: 18 }">Sign Up</text>
        </touchable-opacity>
      </view>
      <text-input
        :style="text_input_email"
        placeholder="Email"
        type="email"
        v-model="text"
      />
      <text-input
        :style="text_input_password"
        placeholder="Password"
        type="password"
        v-model="text"
      />

      <view :style="{ width: '100%' }">
        <text :style="{ color: '#434343', marginTop: 20, fontSize: 14 }"
          >Forgot Password?</text
        >
      </view>

      <view
        :style="{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignContent: 'center',
        }"
      >
        <touchable-opacity :style="sign_in_button">
          <text :style="{ color: 'white', fontSize: 18 }">Sign in</text>
        </touchable-opacity>

        <touchable-opacity :style="google_button">
          <image :source="require('../assets/google_logo.png')" />
        </touchable-opacity>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    navigation: {
      type: Object
    }
  },
  data: () => ({
    text: "",
    text_input_email: {
      height: 50,
      width: "100%",
      borderColor: "#C0C0C0",
      borderWidth: 1,
      borderRadius: 50,
      paddingLeft: 20,
      backgroundColor: "#fff",
      marginTop: 20,
    },
    text_input_password: {
      height: 50,
      width: "100%",
      borderColor: "#C0C0C0",
      borderWidth: 1,
      borderRadius: 50,
      paddingLeft: 20,
      backgroundColor: "#fff",
      marginTop: 20,
    },
    sign_in_button: {
      backgroundColor: "#1A5CFF",
      width: "75%",
      height: 50,
      marginTop: 20,
      borderRadius: 50,
      alignItems: "center",
      justifyContent: "center",
    },
    google_button: {
      backgroundColor: "#fff",
      width: "17%",
      height: 50,
      marginTop: 25,
      borderRadius: 50,
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
    },
  }),

  methods: {
    goto_signup() {
      this.navigation.navigate("Signup");
    },
  },
};
</script>

<style>
.container {
  background-color: #f4f4f4;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.text-color-primary {
  color: blue;
}
</style>
