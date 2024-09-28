<template>
    <div>
        <table class="table">
            <thead>
            <tr>
                <th>Nombre Completo</th>
                <th>Edad</th>
                <th>Acciones</th>
                <th>Modificar Nombre</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="cliente in clientes" :key="cliente.id">
                <td>{{ nombreCompleto(cliente) }}</td>
                <td>{{ cliente.edad }}</td>
                <td>
                    <button class="btn btn-danger" @click="decrementarEdad(cliente)">-</button>
                    <button class="btn btn-success" @click="incrementarEdad(cliente)">+</button>
                </td>
                <td>
                    <input v-model="cliente.nombre" class="form-control" placeholder="Nombre" />
                    <input v-model="cliente.apellido" class="form-control" placeholder="Apellido" />
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

export default {
    data() {
        return {
            clientes: [
                { id: 1, nombre: 'Juan', apellido: 'Salazar', edad: 30 },
                { id: 2, nombre: 'Pablo', apellido: 'Israel', edad: 25 },
                { id: 3, nombre: 'Emilia', apellido: 'Torres', edad: 35 }
            ]
        };
    },
    methods: {
        nombreCompleto(cliente) {
            return `${cliente.nombre} ${cliente.apellido}`;
        },
        incrementarEdad(cliente) {
            cliente.edad++;
        },
        decrementarEdad(cliente) {
            cliente.edad--;
        }
    }
};

</script>

<style scoped>
h4 {
    color: blue;
}
</style>
