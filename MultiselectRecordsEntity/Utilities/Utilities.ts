export class Utilities {
    static parseColumns = (columns: string): [any] => {
        let parsedColumns: any = [];
        const arrayColumns = columns.split(';');
        var index = 1;

        arrayColumns.forEach(column => {
            var newColumn: any = {} as any;
            var splitColumn = column.split(',');
            const displayName = splitColumn[0].trim();
            const fieldName = splitColumn[1].trim();
            newColumn.fieldName = fieldName;
            newColumn.name = displayName;
            newColumn.isResizable = true;
            newColumn.key = "column" + index;
            newColumn.minWidth = 300;
            newColumn.maxWidth;
            index++;
            parsedColumns.push(newColumn);
        });

        return parsedColumns;
    }
}