import { defineStore} from "pinia";


export const useNavStore = defineStore(
  {
    id: 'navs',
    state: () => ({
      active: 'about',
    }),
    actions: {
      navigate(id) {
        this.active = id
      }
    }
  }
)