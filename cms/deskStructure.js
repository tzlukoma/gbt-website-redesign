export default (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.document().schemaType('siteSettings').documentId('siteSettings'),
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !['siteSettings'].includes(item.getId()),
      ),
    ]);