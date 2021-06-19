<template>
  <view
    :style="{
      width: '100%',
      padding: 30,
      flexDirection: 'column',
      justifyContent: 'space-between',
    }"
    class="container"
  >
    <view
      :style="{
        width: '100%',
        height: '30%',
        flexDirection: 'column',
        justifyContent: 'center',
        align: 'center',
      }"
    >
      <image :source="require('../assets/logo.png')" />
    </view>
    <view
      :style="{
        width: '100%',
        height: '70%',
        alignItems: 'center',
        justifyContent: 'flex-end',
      }"
    >
      <view :style="{ width: '100%', justifyContent: 'flex-start' }">
        <text :style="{ color: '#434343', fontSize: 40, fontWeight: 'bold' }"
          >Sign Up</text
        >
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
      <touchable-opacity :style="sign_in_button">
        <text :style="{ color: 'white', fontSize: 18 }">Sign in</text>
      </touchable-opacity>

      <text :style="{ color: '#434343', marginTop: 25 }">Or sign in with</text>

      <touchable-opacity :style="google_button">
        <text :style="{ color: 'white', fontSize: 18, marginRight: 10 }">Google</text>
        <image :source="require('../assets/google_logo.png')" />
      </touchable-opacity>

      <text :style="{ color: '#434343', marginTop: 25 }"
        >Already have an account? Sign In</text
      >
    </view>
  </view>
</template>

<script>
export default {
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
      marginTop: 35,
    },
    text_input_password: {
      height: 50,
      width: "100%",
      borderColor: "#C0C0C0",
      borderWidth: 1,
      borderRadius: 50,
      paddingLeft: 20,
      backgroundColor: "#fff",
      marginTop: 25,
    },
    sign_in_button: {
      backgroundColor: "#1A5CFF",
      width: "100%",
      height: 50,
      marginTop: 25,
      borderRadius: 50,
      alignItems: "center",
      justifyContent: "center",
    },
    google_button: {
      backgroundColor: "#FF3D00",
      width: "100%",
      height: 50,
      marginTop: 25,
      borderRadius: 50,
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
    },
  }),
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
