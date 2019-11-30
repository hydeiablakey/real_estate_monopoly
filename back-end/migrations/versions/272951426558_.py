"""empty message

Revision ID: 272951426558
Revises: 0d5bf9ef27b4
Create Date: 2019-11-30 14:34:09.108573

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '272951426558'
down_revision = '0d5bf9ef27b4'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('games', sa.Column('started', sa.Boolean(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('games', 'started')
    # ### end Alembic commands ###