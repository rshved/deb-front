import { defineStore } from 'pinia'

export const useDeckStore = defineStore({
  id: 'counter',
  state: () => ({
    deckId: null
  }),
  getters: {
    deckID: (state) => state.deckId
  },
  actions: {
    async getDeck() {
      const  { deck_id } = await (await
        fetch(
          'https://deckofcardsapi.com/api/deck/new/shuffle/?cards=AS,7S,8S,9S,10S,JS,QS,KS,AD,7D,8D,9D,' +
          '10D,JD,QD,KD,AC,7C,8C,9C,10C,JC,QC,KC,AH,7H,8H,9H,10H,JH,QH,KH')
      ).json()
      this.deckId = deck_id
      if (deck_id) await (await fetch(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=28`)).json()
    },
  }
})
