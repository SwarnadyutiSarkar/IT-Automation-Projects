<template>
    <div id="app">
        <h1>Automated Patch Management System</h1>
        <PatchForm @patch-added="fetchPatches"/>
        <PatchList :patches="patches"/>
    </div>
</template>

<script>
import PatchForm from './components/PatchForm.vue';
import PatchList from './components/PatchList.vue';
import axios from 'axios';

export default {
    name: 'App',
    components: {
        PatchForm,
        PatchList
    },
    data() {
        return {
            patches: []
        };
    },
    methods: {
        fetchPatches() {
            axios.get('http://localhost:8000/api/patches/')
                .then(response => {
                    this.patches = response.data;
                })
                .catch(error => {
                    console.error('There was an error fetching the patches!', error);
                });
        }
    },
    created() {
        this.fetchPatches();
    }
}
</script>

<style>
/* Add some basic styling */
</style>
