#   W e b   W o r k e r   P e r f o r m a n c e   D e m o  
  
 # #   P r o j e c t   D e s c r i p t i o n  
  
 T h i s   p r o j e c t   i s   a i m e d   a t   d e m o n s t r a t i n g   t h e   c o n c e p t   o f   W e b   W o r k e r s   a n d   t h e   p e r f o r m a n c e   b e n e f i t s   t h e y   o f f e r .   I t   i n c l u d e s   a   s i m p l e   w e b   p a g e   w i t h   t h r e e   b u t t o n s :  
  
 1 .   C a l c u l a t e   S u m   w i t h   W e b   W o r k e r  
 2 .   C a l c u l a t e   S u m   w i t h o u t   W e b   W o r k e r  
 3 .   C h a n g e   B a c k g r o u n d   C o l o r  
  
 T h e   m a i n   f o c u s   i s   o n   c o m p a r i n g   t h e   p e r f o r m a n c e   o f   c a l c u l a t i n g   t h e   s u m   o f   a   l a r g e   n u m b e r   ( 1 , 0 0 0 , 0 0 0 , 0 0 0 )   u s i n g   a   W e b   W o r k e r   v e r s u s   n o t   u s i n g   a   W e b   W o r k e r .  
  
 # #   H o w   t o   R u n   t h e   P r o j e c t   L o c a l l y  
  
 T o   r u n   t h e   p r o j e c t   l o c a l l y ,   f o l l o w   t h e s e   s t e p s :  
  
 1 .   C l o n e   t h e   r e p o s i t o r y   t o   y o u r   l o c a l   m a c h i n e .  
 2 .   O p e n   t h e   ` i n d e x . h t m l `   f i l e   i n   a   w e b   b r o w s e r .  
 3 .   C l i c k   o n   t h e   b u t t o n s   t o   p e r f o r m   t h e   r e s p e c t i v e   a c t i o n s :  
       -   T h e   " C a l c u l a t e   S u m   w i t h   W e b   W o r k e r "   b u t t o n   c a l c u l a t e s   t h e   s u m   u s i n g   a   W e b   W o r k e r .  
       -   T h e   " C a l c u l a t e   S u m   w i t h o u t   W e b   W o r k e r "   b u t t o n   c a l c u l a t e s   t h e   s u m   w i t h o u t   u s i n g   a   W e b   W o r k e r .  
       -   T h e   " C h a n g e   B a c k g r o u n d   C o l o r "   b u t t o n   c h a n g e s   t h e   b a c k g r o u n d   c o l o r   o f   t h e   p a g e .  
  
 # #   P e r f o r m a n c e   F i n d i n g s  
  
 U s i n g   a   W e b   W o r k e r   f o r   c o m p u t a t i o n a l l y   i n t e n s i v e   t a s k s ,   s u c h   a s   c a l c u l a t i n g   t h e   s u m   o f   a   l a r g e   n u m b e r ,   s i g n i f i c a n t l y   i m p r o v e s   p e r f o r m a n c e .   T h e   U I   r e m a i n s   r e s p o n s i v e   d u r i n g   t h e   c a l c u l a t i o n   p r o c e s s   w h e n   u s i n g   a   W e b   W o r k e r ,   w h e r e a s   w i t h o u t   a   W e b   W o r k e r ,   t h e   U I   m a y   f r e e z e   o r   b e c o m e   u n r e s p o n s i v e   u n t i l   t h e   c a l c u l a t i o n   i s   c o m p l e t e .  
  
 # #   C h a l l e n g e s   F a c e d   a n d   S o l u t i o n s  
  
 # # #   C h a l l e n g e s :  
  
 1 .   U n d e r s t a n d i n g   h o w   t o   u s e   W e b   W o r k e r s .  
 2 .   S e n d i n g   a n d   r e c e i v i n g   m e s s a g e s   b e t w e e n   t h e   m a i n   t h r e a d   a n d   t h e   W e b   W o r k e r .  
  
 # # #   S o l u t i o n s :  
  
 1 .   T o   u n d e r s t a n d   h o w   t o   u s e   W e b   W o r k e r s ,   I   r e f e r r e d   t o   t h e   M o z i l l a   D e v e l o p e r   N e t w o r k   ( M D N )   d o c u m e n t a t i o n   a n d   v a r i o u s   o n l i n e   t u t o r i a l s .  
 2 .   F o r   s e n d i n g   a n d   r e c e i v i n g   m e s s a g e s   b e t w e e n   t h e   m a i n   t h r e a d   a n d   t h e   W e b   W o r k e r ,   I   u t i l i z e d   t h e   ` p o s t M e s s a g e `   m e t h o d   t o   s e n d   d a t a   t o   t h e   W e b   W o r k e r   a n d   t h e   ` o n m e s s a g e `   e v e n t   h a n d l e r   t o   r e c e i v e   m e s s a g e s   f r o m   t h e   W e b   W o r k e r .  
  
 # #   R e f e r e n c e s   a n d   R e s o u r c e s  
  
 -   [ M o z i l l a   D e v e l o p e r   N e t w o r k   ( M D N )   W e b   W o r k e r s   D o c u m e n t a t i o n ] ( h t t p s : / / d e v e l o p e r . m o z i l l a . o r g / e n - U S / d o c s / W e b / A P I / W e b _ W o r k e r s _ A P I )  
 -   O n l i n e   t u t o r i a l s   a n d   e x a m p l e s   o n   u s i n g   W e b   W o r k e r s .  
  
 