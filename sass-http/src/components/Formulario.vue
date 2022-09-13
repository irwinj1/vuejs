<template>
  <div>
    <form>
      <div>
        <label>Moneda Nacionas: </label>
        <select>
          <option value="" disabled selected>Seleccione una Moneda...</option>
          <option value="">MXN</option>
          <option value="">USD</option>
          <option value="">EUR</option>
        </select>
      </div>
      <div>
        <label>Cripto Moneda: </label>
        <select>
          <option value="" disabled selected>
            Seleccione una Criptomoneda...
          </option>
          <option value="">BTC</option>
          <option value="">ETH</option>
          <option value="">LTC</option>
        </select>
      </div>
      <div>
        <button type="submit">Cotizar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>
