<template>
  <div class="container">
        <h1>Customer</h1>
        <form>
            <div class="form-group">
                <label for="firstName">First name:</label>
                <input type="text" class="form-control" ref="firstName" placeholder="Enter your first name" v-model="firstName">
                 <transition name="slide-fade">
                <div ref="firstNameMandatory" class="alert alert-warning" v-if="!firstName">
                    First name is mandatory
                </div>
                 </transition>
            </div>
            <div class="form-group">
                <label for="lastName">Last name:</label>
                <input type="text" class="form-control" ref="lastName" placeholder="Enter your last name" v-model="lastName">
                  <transition name="slide-fade">
                <div ref="lastNameMandatory" class="alert alert-warning" v-if="!lastName">
                    Last name is mandatory
                </div>
                 </transition>
            </div>
            <div class="form-group">
                <label for="email">Email address:</label>
                <input type="email" class="form-control" ref="email" placeholder="Enter your email address" v-model="email">
                 <transition name="slide-fade">
                <div ref="emailMandatory" class="alert alert-warning" v-if="!email && newsletter">
                    Email is mandatory if you want to receive our newsletter.
                </div>
                 </transition>
            </div>
            <div class="form-group">
                <label for="mediaChannelSelect">How did you hear from us?</label>
                <select class="form-control" ref="mediaChannelSelect" v-model="mediaChannel">
                    <option value="internet">Internet</option>
                    <option value="press">Press</option>
                    <option value="other">Other</option>
                </select>
            </div>
                 <transition name="slide-fade">
            <div class="form-group" v-if="mediaChannel === 'other'">
                <textarea class="form-control" ref="otherMediaChannel" rows="3" placeholder="Please describe where you have read about us..." v-model="readAbout"></textarea>
            </div>
                 </transition>
            <div class="form-check">
                <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" ref="newsletter" v-model="newsletter">
                    Subscribe to newsletter
                </label>
            </div>
            <button type="submit" class="btn btn-primary" @click.prevent="submitForm" :disabled="submitDisabled">Submit</button>
        </form>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class App extends Vue {
  private firstName = "";
  private lastName = "";
  private email = "";
  private mediaChannel = "";
  private readAbout = "";
  private newsletter = false;

  get submitDisabled() {
    return (
      !this.firstName || !this.lastName || (!this.email && this.newsletter)
    );
  }

  submitForm() {
    alert(
      JSON.stringify(
        {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          mediaChannel: this.mediaChannel,
          readAbout: this.readAbout,
          newsletter: this.newsletter
        },
        null,
        4
      )
    );
  }
}
</script>

<style>
body {
  background-color: lightgray;
}

.container {
  max-width: 512px;
  background-color: white;
  padding-bottom: 25px;
  margin-top: 25px;
  margin-bottom: 25px;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
