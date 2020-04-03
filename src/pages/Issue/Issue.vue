<template>
  <div>
    
    <BookForm
      @save-book="addBook"
      :bookModel="bookModel"
      :sortNav="sortNav"
    >
    </BookForm>
  </div>
</template>
  
<script>

import BookForm from './BookForm/BookForm';
export default {
  data() {
    return {
      bookModel: {},
      sortNav: [
        {
          _id: 'sam',
          name: 'Samsung',
        },
        {
          _id: 'apple',
          name: 'Apple',
        },
      ],
    };
  },
  methods: {
    addBook(bookModel) {
      console.log('bookModel', bookModel);
    },
  },
  components: {
    BookForm
  }
}
</script>