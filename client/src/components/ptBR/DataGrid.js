const ptBR = {
  // Root
  rootGridLabel: "grade",
  noRowsLabel: "Sem linhas",
  errorOverlayDefaultLabel: "Ocorreu um erro.",

  // Density selector toolbar button text
  toolbarDensity: "Densidade",
  toolbarDensityLabel: "Densidade",
  toolbarDensityCompact: "Compacto",
  toolbarDensityStandard: "Padrão",
  toolbarDensityComfortable: "Confortável",

  // Columns selector toolbar button text
  toolbarColumns: "Colunas",
  toolbarColumnsLabel: "Selecionar colunas",

  // Filters toolbar button text
  toolbarFilters: "Filtros",
  toolbarFiltersLabel: "Mostrar filtros",
  toolbarFiltersTooltipHide: "Esconder filtros",
  toolbarFiltersTooltipShow: "Mostrar filtros",
  toolbarFiltersTooltipActive: (count) => (count !== 1 ? `${count} filtros ativos` : `${count} filtro ativo`),

  // Export selector toolbar button text
  toolbarExport: "Exportar CSV",
  toolbarExportLabel: "Exportar CSV",
  toolbarExportCSV: "Baixar como CSV",

  // Columns panel text
  columnsPanelTextFieldLabel: "Procurar coluna",
  columnsPanelTextFieldPlaceholder: "Título da coluna",
  columnsPanelDragIconLabel: "Reordenar coluna",
  columnsPanelShowAllButton: "Mostrar todos",
  columnsPanelHideAllButton: "Esconder todos",

  // Filter panel text
  filterPanelAddFilter: "Adicionar filtro",
  filterPanelDeleteIconLabel: "Deletar",
  filterPanelOperators: "Operadores",
  filterPanelOperatorAnd: "E",
  filterPanelOperatorOr: "Ou",
  filterPanelColumns: "Colunas",
  filterPanelInputLabel: "Valor",
  filterPanelInputPlaceholder: "Valor do filtro",

  // Filter operators text
  filterOperatorContains: "contêm",
  filterOperatorEquals: "igual",
  filterOperatorStartsWith: "começa com",
  filterOperatorEndsWith: "termina com",
  filterOperatorIs: "é",
  filterOperatorNot: "não é",
  filterOperatorAfter: "está depois",
  filterOperatorOnOrAfter: "está dentro ou depois",
  filterOperatorBefore: "está antes",
  filterOperatorOnOrBefore: "está dentro ou antes",

  // Column menu text
  columnMenuLabel: "Menu",
  columnMenuShowColumns: "Mostrar colunas",
  columnMenuFilter: "Filtrar",
  columnMenuHideColumn: "Esconder",
  columnMenuUnsort: "Desordenar",
  columnMenuSortAsc: "Ordenar crescente",
  columnMenuSortDesc: "Ordenar decrescente",

  // Column header text
  columnHeaderFiltersTooltipActive: (count) => (count !== 1 ? `${count} filtros ativos` : `${count} filtro ativo`),
  columnHeaderFiltersLabel: "Mostrar filtros",
  columnHeaderSortIconLabel: "Ordenar",

  // Rows selected footer text
  footerRowSelected: (count) =>
    count !== 1 ? `${count.toLocaleString()} linhas selecionadas` : `${count.toLocaleString()} linha selecionada`,

  // Total rows footer text
  footerTotalRows: "Total de linhas:",

  // Checkbox selection text
  checkboxSelectionHeaderName: "Seleção de checkbox",
};

// localeText={ptBR} adicionar esta props
// importar import ptBR from "{pathTo}/components/ptBR/DataGrid";
// trocar o {pathTo} pelo caminho local até o componente

export default ptBR;
