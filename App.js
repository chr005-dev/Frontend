const API_URL = "https://localhost:7295/api/MusicRecord";

Vue.createApp({
    data() {
        return {
            musicRecords: [],
            errorMessage: ""
        };
    },
    methods: {
        async getAllMusicRecords() {
            this.errorMessage = "";
            try {
                const response = await axios.get(API_URL);
                this.musicRecords = response.data;
            } catch (error) {
                this.errorMessage = "Kunne ikke hente musik. Kontrollér, at API'et kører.";
            }
        }
    },
    mounted() {
        this.getAllMusicRecords();
    }
}).mount("#app");
