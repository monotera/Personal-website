<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col :cols="length">
          <v-text-field
            v-bind="dark_mode"
            filled
            :label="message"
            :height="heigth"
            clearable
            :rules="rule"
            :dark="light_mode"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
export default {
  props: {
    message: String,
    length: Number,
    heigth: String,
    rule: String,
    light_mode: Boolean,
  },
};
</script>
