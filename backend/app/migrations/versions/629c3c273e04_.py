"""empty message

Revision ID: 629c3c273e04
Revises: 
Create Date: 2022-07-03 23:41:02.410868

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '629c3c273e04'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('fullname', sa.String(), nullable=True))
    op.drop_column('users', 'lastname')
    op.drop_column('users', 'firstname')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('firstname', sa.VARCHAR(), autoincrement=False, nullable=True))
    op.add_column('users', sa.Column('lastname', sa.VARCHAR(), autoincrement=False, nullable=True))
    op.drop_column('users', 'fullname')
    # ### end Alembic commands ###
