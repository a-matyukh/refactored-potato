<select bind:value={page}>
	<option value="reg">reg</option>
	<option value="admin">admin</option>
</select>
{#if page == 'reg'}
   <form on:submit|preventDefault={onSubmit}>
		<input type="text" bind:value={newClinic.name} placeholder="name clicnic">
		<br>
		<input type="text" bind:value={newClinic.superUser.name} placeholder="superuser name">
		<input type="text" bind:value={newClinic.superUser.login} placeholder="superuser login">
		<input type="text" bind:value={newClinic.superUser.password} placeholder="superuser password">
		<br>
		<button type="submit">OK</button>
   </form>
{:else if page == 'admin'}
<form on:submit|preventDefault={editBill}>
	<input type="text" bind:value={editedBill.name} placeholder="bill name">
	<input type="text" bind:value={editedBill.status} placeholder="status">
	<button type="submit">OK</button>
</form>
{bill}
{/if}



<script lang="ts">
let page = 'reg'


// Registration
let newClinic = {
    superUser: {
        name: '',
        login: '',
        password: ''
    },
    name: ''
}
async function onSubmit() {
	let res = await fetch("/api/registration", {
		method: 'PUT',
		body: JSON.stringify(newClinic),
		mode: 'cors',
		headers: {
		'Content-Type': 'application/json'
		},
	})
	let result = await res.json()
	if (result) {
		page = 'superadmin'
	}
}

// SA
let editedBill = {
	name: '',
	status: ''
}
let bill = 'пусто'
async function editBill() {
	let res = await fetch("/api/edit", {
		method: 'PATCH',
		body: JSON.stringify(editedBill),
		mode: 'cors',
		headers: {
		'Content-Type': 'application/json'
		},
	})
	let result = await res.json()
	if (result) {
		bill = 'Успешно отредактировано'
	}
}


</script>