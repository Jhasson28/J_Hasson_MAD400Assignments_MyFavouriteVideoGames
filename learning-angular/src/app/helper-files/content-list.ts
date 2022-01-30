
interface Content {
    id: number;
    description: string;
    creator: string;
    imgURL?: string;
    type?: string;
    tags?: string[];
}

class ContentList {
    private contentList: Content[];
    

    constructor(item: Content) {
        this.contentList = [];
        this.contentList[0] = item;
    }

    get items(): Content[]{
        return this.contentList

    }


    public add() {
        return this.contentList.push()
    }

    public numberOfItems() {
        return this.contentList.
    }
}

