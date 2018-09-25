

export class View {
    id              : number;
    type            : string;
    name            : string;
    description     : string;
    allRoles        : boolean; // ALL - SOME
    selectedRoles   : any[];
    ownerType       : string;
    active          : boolean;
    showPrice       : boolean;
    layouts         : any[];
    constructor() {
        this.name = '';
        this.description = '';
        this.allRoles = true;
        this.selectedRoles = [];
        this.ownerType = 'user';
        this.active = true;
        this.showPrice = true;
        this.layouts = [];
    }
}

export class ProductDetailView extends View {
    wholeCatalog: boolean;
    products: any[];
    categories: any[];
    showPaymentMethods: boolean;
    showShippingMethods: boolean;
    showInstallments: boolean;
    showSKU: boolean;
    showRelatedProducts: boolean;
    zoomImages: string;
    newItemLabelText: string;
    discountLabelType: string;
    labelTheme: string;
    showBrand: boolean;
    imageFit: string;
    showSocialShare: boolean;
    socialShareShowAll: boolean;
    socialShareSelectedList: any[];
    constructor() {
        super();

        this.wholeCatalog = true;
        this.products = [];
        this.categories = [];
        this.showPaymentMethods = false;
        this.showShippingMethods = false;
        this.showInstallments = false;
        this.showSKU = true;
        this.showRelatedProducts = true;
        this.zoomImages = 'interactive';
        this.newItemLabelText = '¡NUEVO!';
        this.discountLabelType = 'percentageMinus';
        this.labelTheme = 'ribbon';
        this.showBrand = false;
        this.imageFit = 'contain';

        //SOCIAL SHARE
        this.showSocialShare = true;
        this.socialShareShowAll = true;
        this.socialShareSelectedList = [];
    }
}

export class SinglePurchaseProductDetailView extends ProductDetailView {
    constructor() {
        super();
    }
}

export class BulkPurchaseProductDetailView extends ProductDetailView {
    preferredGroupingAttributes: any[];
    hAxisTitle: string;
    constructor() {
        super();

        this.preferredGroupingAttributes = [];
        this.hAxisTitle = '';
    }
}

export class CategoryDetailView extends View {
    wholeCatalog: boolean;
    categories: any[];
    showBannerImage: boolean;
    showCategoriesTree: boolean;
    showProductCounterInCategoryTree: boolean;
    imageFit: string;
    constructor() {
        super();

        this.wholeCatalog = true;
        this.categories = [];
        this.showBannerImage = false;
        this.showCategoriesTree = true;
        this.showProductCounterInCategoryTree = true;
        this.imageFit = 'contain';
    }
}

export class SinglePurchaseCategoryDetailView extends CategoryDetailView {
    price: string;
    pageSize: number;
    displayType: string;
    quickPurchase: boolean;
    newItemLabelText: string;
    discountLabelType: string;
    labelTheme: string;
    showSKU: boolean;
    imageHover: string;
    showBrand: boolean;
    availableFilters: any[];
    constructor() {
        super();

        this.price = 'minOrMax';
        this.pageSize = 10;
        this.displayType = 'gridMaxFourColumns';
        this.quickPurchase = true;
        this.newItemLabelText = '¡NUEVO!';
        this.discountLabelType = 'percentageMinus';
        this.labelTheme = 'ribbon';
        this.showSKU = true;
        this.imageHover = 'moreInfo';
        this.showBrand = false;
        this.availableFilters = [];
    }
}

export class BulkPurchaseCategoryDetailView extends CategoryDetailView {
    pageSize: number;
    preferredGroupingAttributes: any[];
    constructor() {
        super();

        this.pageSize = 10;
        this.preferredGroupingAttributes = [];
    }
}

export class ContactView extends View {
    constructor() {
        super();
    }
}