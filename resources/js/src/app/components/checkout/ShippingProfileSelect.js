Vue.component("shipping-profile-select", {

    template: "#vue-shipping-profile-select",

    props: ["shippingProfileData"],

    data: function()
    {
        return {
            shippingProfileList    : [],
            selectedShippingProfile: {}
        };
    },

    /**
     * Add a shipping provider
     * Initialise the event listener
     */
    created: function()
    {
        for (var i in this.shippingProfileData)
        {
            var entry = this.shippingProfileData[i]._dataArray;

            this.shippingProfileList.push(
                {
                    id: entry.parcelServicePresetId,
                    name: entry.parcelServiceName,
                    presetName: entry.parcelServicePresetName,
                    price: entry.shippingAmount
                });
        }

        this.addEventListener();
    },

    methods: {
        /**
         * Method on shipping profile changed
         */
        onShippingProfileChange: function()
        {
        },

        /**
         * Format the price
         * @param price
         * @param currency
         * @returns {*}
         */
        formatPrice: function(price, currency)
        {
            return MonetaryFormatService.formatMonetary(price, currency);
        },

        /**
         * Add the event listener
         */
        addEventListener: function()
        {
            // Listen for ApiService events and handle new data
        }
    }
});
