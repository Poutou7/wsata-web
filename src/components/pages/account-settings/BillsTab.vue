<script setup lang="ts">
import { ref } from 'vue';
/*import tabler icons*/
import { CirclePlusIcon,PackageIcon,CreditCardIcon,PencilMinusIcon} from 'vue-tabler-icons';

/*Billing info*/
const businessname = ref('');
const businesssector = ref('');
const storephone = ref('');
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
  }
}


</script>
<template>
    <v-row class="justify-center ma-n2">
        <!----Billing Information----->
        <v-col cols="12" md="9">
            <v-card variant="outlined">
                <v-card-item>
                    <h4 class="text-h4">Billing Name</h4>
                    <div class="text-subtitle-1 textSecondary text-10 my-3">
            Select the notificaitons ou would like to receive via email. Please
            note that you cannot opt out of receving service messages, such as
            payment, security or legal notifications.
          </div>
                    <div class="mt-6">
                        <v-row>
                                <v-col cols="12" md="12">
                                     <v-label class="mb-2 font-weight-medium">Billing Name*</v-label>
                                        <v-text-field
                                            color="primary"
                                            variant="outlined"
                                            type="text"
                                            placeholder="Your Name Or Company Name"
                                            v-model="businessname"
                                            hide-details
                                        />
                                </v-col></v-row>
                                <v-row>
                                <v-col cols="12" md="12">
                                     <v-label class="mb-2 font-weight-medium">Address*</v-label>
                                        <v-text-field
                                            color="primary"
                                            variant="outlined"
                                            type="text"
                                            v-model="businesssector"
                                            placeholder="City , Street , Zip Box , Building No"
                                            hide-details
                                        />
                                </v-col>
                                </v-row>
                                <v-row>
                                  <v-col cols="12" md="12">
                                   <v-label class="mb-2 font-weight-medium"> Country </v-label>
                                       <v-select :item-props="countryProps" :items="countries" v-model="countrySelected"  variant="outlined"  hide-details ></v-select>
                                   </v-col></v-row>
                                <v-row>
                                <v-col cols="12" md="12">
                                        <v-label class="mb-2 font-weight-medium">Mobile*</v-label>
                                        <v-text-field
                                            color="primary"
                                            variant="outlined"
                                            type="text"
                                            placeholder="Ex : +9665089983445"
                                            v-model="storephone"
                                            hide-details
                                        ></v-text-field>
                                </v-col></v-row>
                    </div>
                </v-card-item>
            </v-card>
        </v-col>

        <!-----Payment Method------->
        <v-col cols="12" md="9">
            <v-card variant="outlined">
                <v-card-item>
                    <h4 class="text-h4">Payment Method</h4>
                    <div class="text-subtitle-1 textSecondary text-10 my-3">
                        On 26 December, 2023
                    </div>
                        <div class="d-flex align-center mt-7">
                            <v-avatar size="48" class="mr-2" rounded="md" color="light">
                               <CreditCardIcon size="22" />
                            </v-avatar>
                            <div class="pl-4">
                                <h6 class="text-h6 mb-3 mt-n1">Visa</h6>
                                <h5 class="text-subtitle-1">*****2102</h5>
                            </div>
                            <div class="ml-auto">
                               <v-btn size="35" icon variant="flat" class="lightprimary d-flex">
                                    <v-avatar size="35">
                                        <PencilMinusIcon size="22" />
                                    </v-avatar>
                                    <v-tooltip
                                        activator="parent"
                                        location="bottom"
                                    >Edit
                                    </v-tooltip>
                                </v-btn>
                            </div>
                        </div>
                        <div class="mt-4">
                            <div class="text-subtitle-1 textSecondary text-10 mb-3">
                                If you updated your payment method, it will only be dislpayed here after your next billing cycle.
                            </div>
                            <v-btn class="text-error" variant="outlined" flat>Cancel </v-btn>
                        </div>
                </v-card-item>
            </v-card>
        </v-col>
    </v-row>
    <div class="d-flex justify-end mt-5">
            <v-btn  color="primary" class="mr-4" flat>Save</v-btn>
            <v-btn  class="bg-lighterror text-error"  flat>Cancel</v-btn>
        </div>
</template>
