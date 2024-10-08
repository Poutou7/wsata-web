<script setup lang="ts">
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import avatar1 from '@/assets/images/profile/user-3.jpg';
import avatar2 from '@/assets/images/profile/user-13.jpg';
import avatar3 from '@/assets/images/profile/user-7.jpg';
import avatar4 from '@/assets/images/profile/user-8.jpg';

const select = ref('Sept 2024');
const items = ref(['Sept 2024', 'Oct 2024', 'Nov 2024']);
/*tab*/
const tab = ref(null);

const teachers = ref([
  {
    id: 1,
    avatar: avatar1,
    name: 'Larab Hichem',
    sales: '3.5K'
  },
  {
    id: 2,
    avatar: avatar2,
    name: 'Larab Hichem',
    sales: '3000'
  },
  {
    id: 3,
    avatar: avatar3,
    name: 'Larab Hichem',
    sales: '2.3K'
  },
  {
    id: 4,
    avatar: avatar4,
    name: 'Larab Hichem',
    sales: '58000'
  }
]);

const students = ref([
  {
    id: 1,
    avatar: avatar1,
    name: 'Larab Hichem',
    purchases: '3.5K'
  },
  {
    id: 2,
    avatar: avatar2,
    name: 'Larab Hichem',
    purchases: '3000'
  },
  {
    id: 3,
    avatar: avatar3,
    name: 'Larab Hichem',
    purchases: '2.3K'
  },
  {
    id: 4,
    avatar: avatar4,
    name: 'Larab Hichem',
    purchases: '58000'
  }
]);

const stages = ref([
  {
    id: 1,
    name: 'Secondary',
    type: 'Boys',
    colorType: 'success'
  },
  {
    id: 2,
    name: 'Average',
    type: 'Mixed',
    colorType: 'warning'
  },
  {
    id: 3,
    name: 'Secondary',
    type: 'Boys',
    colorType: 'success'
  },
  {
    id: 4,
    name: 'Secondary',
    type: 'Girls',
    colorType: 'error'
  }
]);
</script>
<template>
  <v-card elevation="10" class="revenue-products">
    <v-card-item class="pb-4">
      <div class="d-flex gap-3 align-center justify-space-between">
        <v-card-title class="text-h5">Top 4</v-card-title>
        <div>
          <v-select v-model="select" :items="items" variant="outlined" density="compact" class="text-body-1" hide-details></v-select>
        </div>
      </div>
      <v-tabs v-model="tab" bg-color="transparent" height="45" class="mt-3">
        <v-tab value="Teachers" class="rounded-md font-weight-semibold">
          <Icon icon="tabler:brand-teams" height="22" class="me-2" />
          Teachers
        </v-tab>
        <v-tab value="Students" class="rounded-md font-weight-semibold"
          ><Icon icon="tabler:heart-plus" height="22" class="me-2" />Students</v-tab
        >
        <v-tab value="Stages" class="rounded-md font-weight-semibold"
          ><Icon icon="tabler:stairs" height="22" class="me-2" />Stages</v-tab
        >
      </v-tabs>
      <div class="mt-4">
        <v-window v-model="tab">
          <!-- Teachers Tab -->
          <v-window-item value="Teachers">
            <v-table class="revenue-table light-border">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-body-1 textPrimary">Name</th>
                    <th class="text-body-1 textPrimary text-right">Sales</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="teacher in teachers" :key="teacher.id" class="month-item">
                    <td>
                      <div class="d-flex align-center">
                        <v-avatar size="48" rounded="md">
                          <img :src="teacher.avatar" :alt="teacher.avatar" width="48" />
                        </v-avatar>
                        <div class="mx-3">
                          <h6 class="text-subtitle-1 text-no-wrap mb-1">
                            {{ teacher.name }}
                          </h6>
                        </div>
                      </div>
                    </td>
                    <td class="text-right">
                      <p class="text-no-wrap text-body-1 textSecondary">{{ teacher.sales }} SR</p>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-table>
          </v-window-item>
          <!-- Students Tab -->
          <v-window-item value="Students">
            <v-table class="revenue-table light-border">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-body-1">Name</th>
                    <th class="text-body-1 text-right">Purchases</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="student in students" :key="student.id" class="month-item">
                    <td>
                      <div class="d-flex align-center">
                        <v-avatar size="48" rounded="md"> <img :src="student.avatar" :alt="student.avatar" width="48" /></v-avatar>
                        <div class="mx-3">
                          <h6 class="text-subtitle-1 text-no-wrap font-weight-semibold mb-1">{{ student.name }}</h6>
                        </div>
                      </div>
                    </td>
                    <td class="text-right">
                      <p class="text-no-wrap text-body-1 textSecondary">
                        {{ student.purchases }} SR
                      </p>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-table>
          </v-window-item>
          <!-- Stages Tab -->
          <v-window-item value="Stages">
            <v-table class="revenue-table light-border">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-body-1">Name</th>
                    <th class="text-body-1 text-right">Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="stage in stages" :key="stage.id" class="month-item">
                    <td>
                      <div class="d-flex align-center">
                        <div class="mx-3">
                          <h6 class="text-subtitle-1 text-no-wrap font-weight-semibold mb-1">{{ stage.name }}</h6>
                        </div>
                      </div>
                    </td>
                    <td class="text-right">
                      <v-chip rounded="sm" class="ma-2 font-weight-semibold" :color="stage.colorType" size="small" label>{{
                        stage.type
                      }}</v-chip>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-table>
          </v-window-item>
        </v-window>
      </div>
    </v-card-item>
  </v-card>
</template>
