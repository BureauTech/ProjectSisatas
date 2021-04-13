const GridTextPt = {
  // Root
  rootGridLabel: 'grid',
  noRowsLabel: 'Sem dados',
  errorOverlayDefaultLabel: 'Ocorreu um erro.',

  // Density selector toolbar button text
  toolbarDensity: 'Densidade',
  toolbarDensityLabel: 'Densidade',
  toolbarDensityCompact: 'Campacto',
  toolbarDensityStandard: 'Padrão',
  toolbarDensityComfortable: 'Confortável',

  // Columns selector toolbar button text
  toolbarColumns: 'Colunas',
  toolbarColumnsLabel: 'Selecionar colunas',

  // Filters toolbar button text
  toolbarFilters: 'Filtros',
  toolbarFiltersLabel: 'Mostrar filtros',
  toolbarFiltersTooltipHide: 'Esconder filtros',
  toolbarFiltersTooltipShow: 'Mostrar filtros',
  toolbarFiltersTooltipActive: (count) =>
    count !== 1 ? `${count} filtros ativos` : `${count} filtros ativo`,

  // Export selector toolbar button text
  toolbarExport: 'Exportar',
  toolbarExportLabel: 'Exportar',
  toolbarExportCSV: 'Download  CSV',

  // Columns panel text
  columnsPanelTextFieldLabel: 'Encontar coluna',
  columnsPanelTextFieldPlaceholder: 'Título coluna',
  columnsPanelDragIconLabel: 'Reordenar coluna',
  columnsPanelShowAllButton: 'Mostrar tudo',
  columnsPanelHideAllButton: 'Esconder tudo',

  // Filter panel text
  filterPanelAddFilter: 'Adicionar filtro',
  filterPanelDeleteIconLabel: 'Deletar',
  filterPanelOperators: 'Operador',
  filterPanelOperatorAnd: 'E',
  filterPanelOperatorOr: 'Ou',
  filterPanelColumns: 'Colunas',
  filterPanelInputLabel: 'Valor',
  filterPanelInputPlaceholder: 'Valor do filtro',

  // Filter operators text
  filterOperatorContains: 'Contém',
  filterOperatorEquals: 'Igual a',
  filterOperatorStartsWith: 'Começa com',
  filterOperatorEndsWith: 'Termina com',
  filterOperatorIs: 'é',
  filterOperatorNot: 'não é',
  filterOperatorAfter: 'depois',
  filterOperatorOnOrAfter: 'agora ou antes',
  filterOperatorBefore: 'is before',
  filterOperatorOnOrBefore: 'agora ou depois',

  // Column menu text
  columnMenuLabel: 'Menu',
  columnMenuShowColumns: 'Mostrar',
  columnMenuFilter: 'Filtros',
  columnMenuHideColumn: 'Esconder',
  columnMenuUnsort: 'Desordenhar',
  columnMenuSortAsc: 'Crescente',
  columnMenuSortDesc: 'Decrescente',

  // Column header text
  columnHeaderFiltersTooltipActive: (count) =>
    count !== 1 ? `${count} filtros ativos` : `${count} filtro ativo`,
  columnHeaderFiltersLabel: 'Mostar filtros',
  columnHeaderSortIconLabel: 'Ordenar',

  // Rows selected footer text
  footerRowSelected: (count) =>
    count !== 1
      ? `${count.toLocaleString()} Linhas selecionadas`
      : `${count.toLocaleString()} Linha selecionada`,

  // Total rows footer text
  footerTotalRows: 'Linhas:',

  // Checkbox selection text
  checkboxSelectionHeaderName: 'Selecionado',
};

export default GridTextPt