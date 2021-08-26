<!-- <input type="range" min="-90" max="90" bind:value={$degree}
  on:input={() => console.log($degree)}
  on:change={() => emit('spat')}
> -->

<button on:click={() => emit('mayak')}>ok</button>

<!-- {$degree > 0 ? 'Направо' : "Налево"} -->
<!-- {$degree} -->




<script lang="ts">
let posa = 'rakom'
// import { degree } from "../store"
import { emit } from "../emitter"









</script>