<template>
    <div>
        <h2>Patch List</h2>
        <ul>
            <li v-for="patch in patches" :key="patch.id">
                {{ patch.name }} - {{ patch.version }} - {{ patch.status }}
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            patches: []
        };
    },
    created() {
        axios.get('http://localhost:8000/api/patches/')
            .then(response => {
                this.patches = response.data;
            })
            .catch(error => {
                console.error('There was an error fetching the patches!', error);
            });
    }
}
</script>
