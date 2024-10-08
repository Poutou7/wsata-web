<template>
  <v-card elevation="10">
    <v-row class="ma-sm-n2 ma-n1">
      <v-col cols="12" sm="6">
        <v-card variant="outlined">
          <v-card-item>
            <h5 class="text-h5">Change Profile</h5>
            <div class="text-subtitle-1 textSecondary mt-2">Change Your Profile Picture From Here</div>
            <div class="text-center mt-6 mb-6">
              <v-avatar size="120" class="avatar">
                <img src="@/assets/images/profile/user-16.svg" height="120" alt="image" class="img" />
              </v-avatar>
            </div>
            <div class="d-flex justify-center">
              <v-btn color="primary" class="mx-2 text-uppercase" flat>{{ $t('Upload') }}</v-btn>
              <v-btn color="error" class="mx-2 text-uppercase" variant="outlined" flat>{{ $t('Reset') }}</v-btn>
            </div>
            <div class="text-subtitle-1 textSecondary text-center my-sm-8 my-6">Allowed JPG, GIF or PNG. Max size of 800K</div>
          </v-card-item>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card variant="outlined">
          <v-card-item>
            <h5 class="text-h5">Change Password</h5>
            <div class="text-subtitle-1 textSecondary mt-2">
              To Change Your Password Please Confirm Here
            </div>
            <div class="mt-5">
              <v-label class="mb-2 font-weight-medium">Current Password</v-label>
              <v-text-field
                color="primary"
                variant="outlined"
                :type="showcurrenypwd ? 'text' : 'password'"
                v-model="currenypwd"
                placeholder="***************"
                :append-inner-icon="showcurrenypwd ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append-inner="showcurrenypwd = !showcurrenypwd"
              />
              <v-label class="mb-2 font-weight-medium">New Password</v-label>
              <v-text-field
                color="primary"
                variant="outlined"
                :type="shownewpwd ? 'text' : 'password'"
                v-model="newpwd"
                placeholder="***************"
                :append-inner-icon="shownewpwd ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append-inner="shownewpwd = !shownewpwd"
              />
              <v-label class="mb-2 font-weight-medium">Confirm Password</v-label>
              <v-text-field
                color="primary"
                variant="outlined"
                :type="showconfirmpwd ? 'text' : 'password'"
                v-model="confirmpwd"
                hide-details
                placeholder="***************"
                :append-inner-icon="showconfirmpwd ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append-inner="showconfirmpwd = !showconfirmpwd"
              />
            </div>
          </v-card-item>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card variant="outlined">
          <v-card-item>
            <h5 class="text-h5">Personal Details</h5>
            <div class="text-subtitle-1 textSecondary mt-2">To Change Your Personal Details,Edit And Save From Here</div>
            <div class="mt-5">
              <v-row>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium"> Your Name </v-label>
                  <v-text-field color="primary" variant="outlined" type="text" v-model="yourName" hide-details placeholder="Ahmad Zaki" />
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium"> Job Name </v-label>
                  <v-text-field color="primary" variant="outlined" type="text" v-model="storeName" hide-details placeholder="Designer"></v-text-field>
                </v-col>
              </v-row>
                <v-row>
                <v-col cols="12" md="12">
                  <v-label class="mb-2 font-weight-medium"> Country </v-label>
                  <v-select :item-props="countryProps" :items="countries" v-model="countrySelected"  variant="outlined"  hide-details ></v-select>
                </v-col>
              </v-row>
              </div>
              <v-row>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium"> Email </v-label>
                  <v-text-field color="primary" variant="outlined" type="email" v-model="email" hide-details placeholder="someone@info.com"></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium"> Phone </v-label>
                  <v-text-field
                    color="primary"
                    variant="outlined"
                    type="text"
                    v-model="phone"
                    hide-details
                    placeholder="+915456456"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-label class="mb-2 font-weight-medium"> Address </v-label>
                  <v-text-field
                    color="primary"
                    variant="outlined"
                    type="text"
                    v-model="address"
                    hide-details
                    placeholder="814 Howard Street, 120255, Saudi Arabia"
                  ></v-text-field>
                </v-col>
              </v-row>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
    <div class="d-flex justify-end mt-5">
      <v-btn color="primary" class="mr-4" height="42" flat>{{ $t('Save') }}</v-btn>
      <v-btn class="bg-lighterror text-error" height="42" flat>{{ $t('Cancel') }}</v-btn>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';

/*change password*/
const currenypwd = ref('');
const showcurrenypwd = ref(false);
const newpwd = ref('');
const shownewpwd = ref(false);
const confirmpwd = ref('');
const showconfirmpwd = ref(false);

/*personal detail*/
const yourName = ref('');
const storeName = ref('');
const countries = ref([
  {
    id: 1,
    name: 'Saudi Arabia'
  },
  {
    id: 2,
    name: 'Qatar'
  }
]);
const countrySelected = ref('');
function countryProps(item: any) {
  return {
    title: item.name
  };
}
const currencies = ref([
  {
    id: 1,
    name: 'SR'
  },
  {
    id: 2,
    name: 'DA'
  }
]);
const currencySelected = ref('');
function currencyProps(item: any) {
  return {
    title: item.name
  };
}

const email = ref('');
const phone = ref('');
const address = ref('');
</script>
