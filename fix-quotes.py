# -*- coding: utf-8 -*-
import io

with io.open('src/data/content.ts', 'r', encoding='utf-8') as f:
    c = f.read()

c = c.replace('purchase order."" , kr:', 'purchase order.", kr:')
c = c.replace('purchase order."", kr:', 'purchase order.", kr:')
c = c.replace('purchase order."" , kr:', 'purchase order.", kr:')
c = c.replace('purchase order.""', 'purchase order."')
c = c.replace('positioning is everything."" , kr:', 'positioning is everything.", kr:')
c = c.replace('positioning is everything."", kr:', 'positioning is everything.", kr:')
c = c.replace('positioning is everything.""', 'positioning is everything."')

with io.open('src/data/content.ts', 'w', encoding='utf-8', newline='') as f:
    f.write(c)

print('Done - double quotes fixed')
