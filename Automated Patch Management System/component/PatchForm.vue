<template>
    <form @submit.prevent="handleSubmit">
        <div>
            <label>Name:</label>
            <input type="text" v-model="name" required />
        </div>
        <div>
            <label>Description:</label>
            <textarea v-model="description" required></textarea>
        </div>
        <div>
            <label>Version:</label>
            <input type="text" v-model="version" required />
        </div>
        <div>
            <label>Release Date:</label>
            <input type="date" v-model="release_date" required />
        </div>
        <button type="submit">Add Patch</button>
    </form>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            name: '',
            description: '',
            version: '',
            release_date: '',
        };
    },
    methods: {
        handleSubmit() {
            axios.post('http://localhost:8000/api/patches/', {
                name: this.name,
                description: this.description,
                version: this.version,
                release_date: this.release_date
            }).then(() => {
                this.$emit('patch-added');
                this.name = '';
                this.description = '';
                this.version = '';
                this.release_date = '';
            }).catch(error => {
                console.error('There was an error adding the patch!', error);
            });
        }
    }
}
</script>
