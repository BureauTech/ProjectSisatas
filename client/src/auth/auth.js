/**
 * Verifica se há algum item com a data expirada  
 * Se encontrar, irá remover o mesmo
 */
function localStorageExpires() {
  let toRemove = [], //Itens para serem removidos
    currentDate = new Date().getTime(); //Data atual em milissegundos

  for (let i = 0, j = localStorage.length; i < j; i++) {
    let key = localStorage.key(i),
      itemValue = localStorage.getItem(key);

    //Verifica se o formato do item para evitar conflitar com outras aplicações
    if (itemValue && /^\{(.*?)\}$/.test(itemValue)) {
      //Decodifica de volta para JSON
      let current = JSON.parse(itemValue);

      //Checa a chave expires do item especifico se for mais antigo que a data atual ele salva no array
      if (current.expires && current.expires <= currentDate) {
        toRemove.push(key);
      }
    }
  }

  // Remove itens que já passaram do tempo
  // Se remover no primeiro loop isto poderia afetar a ordem,
  // pois quando se remove um item geralmente o objeto ou array são reordenados
  for (let j = toRemove.length - 1; j >= 0; j--) {
    localStorage.removeItem(toRemove[j]);
  }
}

localStorageExpires(); //Auto executa a limpeza

/**
 * Função para adicionar itens no localStorage
 * @param {string} chave Chave que será usada para obter o valor posteriormente
 * @param {*} valor Quase qualquer tipo de valor pode ser adicionado, desde que não falhe no JSON.stringify
 * @param {number} minutos Tempo de vida do item
 */
function setLocalStorage(chave, valor, minutos) {
  const expirarem = new Date().getTime() + 60000 * minutos;

  localStorage.setItem(
    chave,
    JSON.stringify({
      value: valor,
      expires: expirarem,
    })
  );
}

/**
 * Função para obter itens do localStorage que ainda não expiraram
 * @param {string} chave Chave para obter o valor associado
 * @return {*} Retorna o token, se o item tiver expirado irá retorna undefined
 */
function getLocalStorage(chave) {
  localStorageExpires(); //Limpa itens

  const itemValue = localStorage.getItem(chave);

  if (itemValue && /^\{(.*?)\}$/.test(itemValue)) {
    //Decodifica de volta para JSON
    const current = JSON.parse(itemValue);

    return current.value;
  }
}

export { setLocalStorage, getLocalStorage };
