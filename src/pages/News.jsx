// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Helmet } from 'react-helmet';
// import ContactEditor from 'components/ContactEditor/ContactEditor';
// import { ContactList } from 'components/ContactList/ContactList';
// import { Filter } from "components/Filter/Filter";
// import { Modal } from 'components/Modal/Modal';
// import { Loader } from "components/Loader/Loader";
// import { fetchContacts } from 'redux/contacts/contacts-operations';
// import { selectIsLoading, selectError } from 'redux/contacts/contacts-selectors';
// import toast from 'react-hot-toast';
// import { Box } from '../components/Box/Box';

// export default function Contacts() {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const toggleModal = () => setIsModalOpen(state => !state);

//   useEffect(() => {
//     dispatch(fetchContacts());
//     error && toast.error('No response from server!');
//   }, [dispatch, error]);

//   const showContacs = isLoading && !error;

//   return (
//     <Box p="16px 0" as="main">
//       <Helmet>
//         <title>Your contacts</title>
//       </Helmet>
      
//       <Filter onClick={toggleModal} />
      
//       {showContacs ? <Loader /> : <ContactList />}

//       {isModalOpen && (
//         <Modal onClose={toggleModal}>
//           <ContactEditor onAdd={toggleModal} />
//         </Modal>
//       )}
//     </Box>
//   );
// }