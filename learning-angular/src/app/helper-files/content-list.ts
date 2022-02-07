import { Content } from "./content-interface"
class ContentList {
    private contentList: Content[];

    constructor() {
        this.contentList = [];
    }

    get items(): Content[]{
        return this.contentList

    }


    add(newContent: Content) {
        this.contentList.push(newContent);
    }

    arrayLength(): number {
        return this.contentList.length;
    }

    generateHtml(index: number): string {
        if (index >= this.contentList.length) {
            return `<div class="error">No Digimon found at index ${index}</div>`;
        }
        return `<div class="title">${this.contentList[index].title}</div>
        <div class="description">${this.contentList[index].description}</div>
        <div class="creator">${this.contentList[index].creator}</div>
        <div class="imageUrl"><img src="${this.contentList[index].imgURL}"></div>
        <div class="type">${this.contentList[index].type}</div>`;
    }
}

    
}

