<template>
  <div id="contact-component">
    <address class="contact-section">
      <img
        class="profileImg"
        src="../assets/NelsonMosquera.png"
        width="200"
        height="200"
      />
      <h1 class="contact-tittle">CONTACT ME!</h1>
      <div class="contact-main-section">
        <div class="contact-phone">
          <i class="fas fa-phone-alt"></i>
          <p>300-848-1578</p>
        </div>
        <div class="contact-email">
          <i class="far fa-envelope"></i>
          <p>nelson.a.mosquera@gmail.com</p>
        </div>
      </div>
    </address>
    <div class="question-section">
      <h1 class="contact-tittle">ANY QUESTIONS?</h1>
      <form class="questions-main-section">
        <p class="question-title">Name *</p>
        <textField :length="12" :message="'Hi! ...'" :heigth="'1rem'" />
        <p class="question-title">Email *</p>
        <textField
          :length="12"
          :message="'Email goes here!'"
          :heigth="'1rem'"
          :rule="emailRules"
        />
        <p class="question-title">Message *</p>
        <textField
          :length="12"
          :message="'Tell me your question!'"
          :heigth="'10rem'"
          :rule="messageRules"
        />
      </form>
      <div class="contact-button">
        <button type="submit">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
import textField from "./Text-field";
export default {
  components: {
    textField,
  },
  data() {
    return {
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) =>
          /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            v
          ) || "E-mail must be valid",
      ],
      messageRules: [
        (v) => (v || "").length <= 200 || "Description must be 200 characters or less",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#contact-component {
  background-color: #ffffff;
  background-image: $contact-pattern;
  background-repeat: repeat;
  color: black;
  font-family: $contact-main-font;
  padding: 4rem 1rem;
  min-height: 100vh;
  @media screen and (min-width: $breakpoint-desktop) {
    display: flex;
    flex-direction: row;
  }
}
.contact-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  box-sizing: border-box;
  margin: 2rem 0;
  padding: 1rem;
  width: 100%;
  border: 5px solid black;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8);
  @media screen and (min-width: $breakpoint-desktop) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1.5rem;
    width: 50%;
  }
  .profileImg {
    @media screen and (max-width: $breakpoint-desktop) {
      width: 100px;
      height: 100px;
    }
  }
  .contact-main-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: $breakpoint-desktop) {
      align-items: center;
      flex-direction: column;
      padding: 0;
    }
  }
  .contact-tittle {
    font-family: $contact-title-font;
    font-size: 1.2rem;
    padding: 1rem;
    text-align: center;
    color: lightseagreen;
    @media screen and (min-width: $breakpoint-tablet) and (max-width: $breakpoint-desktop) {
      font-size: 1.5rem;
    }
    @media screen and (min-width: $breakpoint-desktop) {
      font-size: 2rem;
      margin: 1rem 0;
    }
  }
  .contact-phone,
  .contact-email {
    align-items: center;
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
    width: 50%;
    @media screen and (min-width: $breakpoint-tablet) and (max-width: $breakpoint-desktop) {
      font-size: 1.3rem;
    }
    @media screen and (min-width: $breakpoint-desktop) {
      display: flex;
      font-size: 1.8rem;
      flex-direction: row;
      justify-content: center;
      padding: 2rem 0;
      width: 25rem;
    }
    p {
      font-family: $contact-text-font;
      padding: 1rem 0;
      @media screen and (min-width: $breakpoint-desktop) {
        padding: 0;
        margin: 0;
      }
    }
    i {
      padding-top: 1rem;
      color: lightseagreen;
      @media screen and (min-width: $breakpoint-desktop) {
        align-self: center;
        padding: 0 1rem;
      }
    }
  }
  .contact-phone {
    border-top: 3px solid lightseagreen;
    border-bottom: 3px solid lightseagreen;
    @media screen and (min-width: $breakpoint-desktop) {
      border-right: none;
      border-top: 2px solid lightseagreen;
      border-bottom: 2px solid lightseagreen;
      padding: 3rem 0;
    }
  }
}
.question-section {
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 2rem 0;
  padding: 1rem;
  width: 100%;
  border: 5px solid black;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8);
  @media screen and (min-width: $breakpoint-desktop) {
    font-size: 1.2rem;
    margin: 1.5rem;
    width: 50%;
  }
  .contact-tittle {
    font-family: $contact-title-font;
    font-size: 1.2rem;
    padding: 1rem;
    text-align: center;
    color: lightseagreen;
    @media screen and (min-width: $breakpoint-desktop) {
      font-size: 1.5rem;
    }
  }
  .question-title {
    margin-left: 12px;
    font-family: $contact-text-font;
  }
  .contact-button {
    text-align: center;
    width: 100%;
  }
  button {
    background-color: $main-btn-color;
    border: 3px solid black;
    color: $main-font-color;
    &:hover {
      background-color: $page-main-color;
      color: $main-btn-color;
    }
    cursor: pointer;
    font-family: $contact-text-font;
    font-size: 0.8rem;
    margin: 1rem;
    padding: 0.5rem 2rem;
    transition: 0.5s;
    border-radius: 5rem;
    width: 40%;
    @media screen and (min-width: $breakpoint-tablet) and (max-width: $breakpoint-desktop) {
      font-size: 1rem;
    }
    @media screen and (min-width: $breakpoint-desktop) {
      font-size: 1.2rem;
    }
  }
}
</style>
